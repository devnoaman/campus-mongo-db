const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  secondName: {
    type: String,
    required: false
  },
  thirdName: {
    type: String,
    required: false
  },
  forthName: {
    type: String,
    required: false
  },
  family: {
    type: String,
    required: false
  },

  college: {
    type: String,
    required: false
  },

  department: {
    type: String,
    required: false
  },

  stage: {
    type: String,
    required: false
  },

  division: {
    type: String,
    required: false
  },
   salt: {
    type: String,
    required: false
  },

  image: {
    type: String,
    required: false
  },
}, { timestamps: true });

// teacherSchema.pre('save', function (next) {
//   var user = this;
//   console.log(user)

//   // only hash the password if it has been modified (or is new)
//   // if (!user.isModified('password')) return next();

//   // // generate a salt
//   // bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
//   //   if (err) return next(err);

//   //   // hash the password using our new salt
//   //   bcrypt.hash(user.password, salt, function (err, hash) {
//   //     if (err) return next(err);

//   //     // override the cleartext password with the hashed one
//   //     user.password = hash;
//   //     next();
//   //   });
//   // });


// });

// teacherSchema.methods.comparePassword = function (candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

var Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;