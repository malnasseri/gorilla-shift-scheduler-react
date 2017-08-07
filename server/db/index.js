 /*Mongo Database*/
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL;

if (process.env.MONGODB_URI) {
	MONGO_URL = process.env.MONGODB_URL
	mongoose.connect(process.env.MONGODB_URI)
} else {
	MONGO_URL = 'mongodb://localhost/gorilla-test2'
	mongoose.connect(MONGO_URL) // local mongo url
}
// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})

module.exports = db