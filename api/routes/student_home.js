const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const formidable = require('formidable')

const db_uri = 'mongodb://localhost:27017/Hieu'

router = express.Router()
router.use(cors())

mongoose.connect(db_uri, {
	useNewUrlParser : true,
	useUnifiedTopology : true
})

const studentSchema = mongoose.Schema({username:String, password:String})
const studentModel = mongoose.model('students', studentSchema)

router.post('/login', function(req, res){
	// handling students login
	var form = formidable.IncomingForm()
	form.parse(req, function(err, fields, files){
		/* --- For analytics purpose, the login history should be recorded later --- */
		// check if the user name is in the database
		var username = fields.username

		// for security purpose, this should be encrypted later
		var password = fields.password

		var results = studentModel.find({}, function(err, docs){
			if(err){
				console.log(err)

				throw err
			}

			if(docs.length >= 1){
				// check if password is correct
				var result = docs[0]
				if(result.password == password){
					res.send('success')
					console.log('[INFO] Login successfully ...')
				}else{
					res.send('failed')
					console.log('[ERROR] Login failed for user ' + result.username + '...')
				}
			}else{
				console.log('[ERROR] Username does not exist ...')
			}
		})
	})
})
module.exports = router;
