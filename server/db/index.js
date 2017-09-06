 /*Mongo Database*/
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGODB_URI;

if (process.env.MONGODB_URI) {
	MONGODB_URI = process.env.MONGODB_URI
	mongoose.connect(process.env.MONGODB_URI)
} else {
	MONGODB_URI = 'mongodb://localhost/gorilla-test2'
	mongoose.connect(MONGODB_URI) // local mongo url
}
// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection
db.on('error', err => { 
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGODB_URI}`
	)
})
module.exports = db