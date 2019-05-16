const mongoose = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
  },
  email: {
    type: String,
    require: true
  },
  companyName: String,
}, {
  timestamps: true,
  versionKey: false
  })

userSchema.plugin(PLM, {usernameField: "email"})
module.exports = mongoose.model('User', userSchema)