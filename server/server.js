  const express = require('express')
  const bodyParser = require('body-parser')
  const morgan = require('morgan')
  const session = require('express-session')
  const MongoStore = require('connect-mongo')(session)
  const dbConnection = require('./db') // loads our connection to the mongo database
  const passport = require('./passport')
  const app = express()
  const PORT = process.env.PORT || 8080
  const employee = require("./db/models/employee");
  const EmployeeSchedule = require("./db/models/employeeSchedule");
  const announcements = require("./db/models/announcements")
  // ===== Middleware ====
  app.use(morgan('dev'))
  app.use(
  	bodyParser.urlencoded({
  		extended: false
  	})
  )
  app.use(bodyParser.json())
  app.use(
  	session({
  		secret: process.env.APP_SECRET || 'this is the default passphrase',
  		store: new MongoStore({ mongooseConnection: dbConnection }),
  		resave: false,
  		saveUninitialized: false
  	})
  )
  // ===== testing middleware =====
  app.use((req, res, next) => {
  	console.log('===== passport user =======')
  	console.log(req.session)
  	console.log(req.user)
  	console.log('===== END =======')
  	next()
  })
  // ===== Passport ====
  app.use(passport.initialize())
  app.use(passport.session())
  // ==== if its production environment!
  if (process.env.NODE_ENV === 'production') {
  	const path = require('path')
  	console.log('YOU ARE IN THE PRODUCTION ENV')
  	app.use('/static', express.static(path.join(__dirname, '../build/static')));
    app.use('/assets', express.static(path.join(__dirname, '../build/assets')))
  	app.get('/', (req, res) => {
  		res.sendFile(path.join(__dirname, '../build/'))
  	})
  }

  /* Express app ROUTING */
  app.use('/auth', require('./auth'))
  // ====== Error handler ====
  app.use((err, req, res, next) => {
  	console.log('===== ERROR =======')
  	console.error(err.stack)
  	res.status(500)
  })
  app.get("/", (req, res)=> {
       res.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
   //Getting Employees from the database
  app.get("/getAllEmployees", (req, res, next) => {
    employee.find({ "active": 1 }).exec((err, doc) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });
  //Get employee schedules from database
  app.get("/getEmpSchedules", (req, res, next) => {
    EmployeeSchedule.find({ "active": 1 }).exec((err,docs) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      else {
        res.send(docs);
      }
    });
  });
  //Posting Employee Schedule to the database
  app.post("/addEmpSchedule", (req, res, next) => {
    EmployeeSchedule.create({
      emp_id: req.body.emp_id,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Employee Schedule Saved!");
      }
    });
  });
  //Updating existing employee schedule
  app.put("/updateSchedule/:id", (req, res, next) => {
    const newSchedule = req.body.employeeSchedule;
    EmployeeSchedule.findOneAndUpdate({ "_id": req.params.id }, {
        monday: newSchedule.monday,
        tuesday: newSchedule.tuesday,
        wednesday: newSchedule.wednesday,
        thursday: newSchedule.thursday,
        friday: newSchedule.friday,
        saturday: newSchedule.saturday,
        sunday: newSchedule.sunday
    }, (err) => {
       if (err) {
           console.log(err);
       } else {
           res.send("Employee schedule updated");
       }
    });
  });
  //Posting new Employee to the database
  app.post("/addEmployee", (req, res, next) => {
    employee.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      addressOne: req.body.addressOne,
      addressTwo: req.body.addressTwo,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      email: req.body.email,
      phone: req.body.phone,
      phoneType: req.body.phoneType
    }, (err,doc) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });
  //Updating existing employee
  app.put("/updateEmployee/:id", (req, res, next) => {
     employee.findOneAndUpdate({ "_id": req.params.id }, {
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         addressOne: req.body.addressOne,
         addressTwo: req.body.addressTwo,
         city: req.body.city,
         state: req.body.state,
         zip: req.body.zip,
         email: req.body.email,
         phone: req.body.phone,
         phoneType: req.body.phoneType
     }, function(err) {
         if (err) {
             console.log(err);
         } else {
             res.send("Employee updated");
         }
     });
  });
  // Update employee's name in employee schedule collection
  app.put("/updateEmpName/:emp_id", (req, res, next) => {
    EmployeeSchedule.findOneAndUpdate({"emp_id":req.params.emp_id}, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }, function(err) {
       if (err) {
           console.log(err);
       } else {
           res.send("Employee's name updated");
       }
     });
  });
  // "Remove" existing employee
  app.put("/removeEmployee/:id", (req, res, next) => {
     employee.findOneAndRemove({ "_id": req.params.id })
     .exec((err, doc) => {
         if (err) {
             console.log(err);
         } else {
            res.send(doc);
         }
     })
  });
  // "Remove" existing employee schedule
  app.put("/removeEmpSchedule/:emp_id", (req, res) => {
     EmployeeSchedule.findOneAndRemove({ "emp_id": req.params.emp_id })
     .exec((err, doc) => {
         if (err) {
             console.log(err);
         } else {
             res.send(doc);
         }
     })
  });
  //Getting announcements from the database
  app.get("/getAnnouncements", (req, res, next) => {
      announcements.find({ "active": 1 }).exec((err, doc) => {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
    });
  //Put announcements to database
  app.post("/addAnnouncements", (req, res, next) => {
      announcements.create({
        title: req.body.title,
        content: req.body.content
      }, (err, doc) => {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
    });
  
// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
