var Teacher = require('../models/teacher');

const { hashSync, compareSync } = require("bcrypt");
const { ReplSet } = require('mongodb');
bcrypt = require('bcrypt'),
    module.exports = {
        signup: async (req, res) => {
            console.log('hitted this point')
            if (
                !req.body.username ||
                !req.body.password

            ) {
                // next('add required fields', null, res)
                res.send({ message: "add required fields" })
            }





            //  // generate a salt
            //                 bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            //                     if (err) return next(err);

            //                     // hash the password using our new salt
            //                     bcrypt.hash(user.password, salt, function (err, hash) {
            //                         if (err) return next(err);

            //                         // override the cleartext password with the hashed one
            //                         user.password = hash;

            //                     });
            //                 });







            try {

                let result = await Teacher.findOne({ username: req.body.username },)
                if (result) {
                    res.send(`there is user name : ${req.body.username} `)
                }


                // if (result.isModified('password')) {
                //     res.send('password modified')
                // }


                // generate a salt
                var salt = await bcrypt.genSalt(10)


                // hash the password using our new salt
                var hash = await bcrypt.hash(req.body.password, salt
                );


                Teacher = new Teacher({
                    username: req.body.username,
                    password: hash
                })

                var f = await Teacher.save()



                console.log(f)
                //res.render('serch',result)      
            }
            catch (e) {
                console.log('catched error')
                // next(e);
                res.send(e)
            }




            // await Teacher.findOne({ username: req.body.username }, function (er, ad) {
            //     console.log(er, ad)
            // })
            //     .then(result => {


            //         if (result) {
            //             res.send(`there is user name : ${req.body.username} `)
            //         }


            //         // 
            // if (result.isModified('password')) {
            //     res.send('password modified')
            // }


            // generate a salt
            // await bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            //     if (err) res.send(err);

            //     // hash the password using our new salt
            //     bcrypt.hash(req.body.password, salt, function (err, hash) {
            //         if (err) res.send(err);

            //         // override the cleartext password with the hashed one
            //         console.log(hash)
            //         pass = hash;

            //     });
            // });
            //         // console.log(pass)

            //         Teacher = new Teacher({
            //             username: req.body.username,
            //             password: "ddddsaa"
            //         })

            //         Teacher.save()
            //             .then(result => {
            //                 res.send(result);
            //             })
            //             .catch(err => {
            //                 console.log(err);
            //             });



            //         // there is no user with the user name so we must create new user


            //         console.log(result)
            //         // res.send("res");
            //     })
            //     .catch(err => {
            //         ReplSet.send(err)
            //         console.log(err);
            //     });

        },
        login: (req, res) => {

            if (
                !req.body.username ||
                !req.body.password


            ) {
                res.send({ message: "add required fields" })
            }




            Teacher.findOne({ username: req.body.username }, function (er, ad) { })
                .then(result => {
                    if (!result) {
                        res.send(`there is no user name : ${req.body.username} `)
                    }
                    console.log(result)
                    res.send(result);
                })
                .catch(err => {
                    ReplSet.send(err)
                    console.log(err);
                });
        },


        update: (req, res) => {

            if (
                !req.body.username



            ) {
                res.send({ message: "add required fields" })
            }




            Teacher.findOne({ username: req.body.username }, function (er, ad) { })
                .then(async (result) => {
                    if (!result) {
                        res.send(`there is no user name : ${req.body.username} `)
                    }
                    if (req.body.firstName) {
                        result.firstName = req.body.firstName;

                    }
                    if (req.body.secondName) {
                        result.secondName = req.body.secondName;

                    }
                    if (req.body.thirdName) {
                        result.thirdName = req.body.thirdName;

                    }
                    if (req.body.forthName) {
                        result.forthName = req.body.forthName;

                    }
                    if (req.body.family) {
                        result.family = req.body.family;

                    }
                    if (req.body.college) {
                        result.college = req.body.college;

                    }
                    if (req.body.department) {
                        result.department = req.body.department;

                    }
                    if (req.body.stage) {
                        result.stage = req.body.stage;

                    }
                    if (req.body.division) {
                        result.division = req.body.division;

                    }

                    await result.save();

                    console.log(result)
                    res.send(result);
                })
                .catch(err => {
                    ReplSet.send(err)
                    console.log(err);
                });
        },



        searchStudent: (req, res) => {
            console.log(req.query.q)
            Student.find({ firstName: new RegExp(req.query.q, 'i') }, function (err, docs) {
                // cb(docs);
            })
                .then(result => {
                    res.send(result);
                })
                .catch(err => {
                    console.log(err);
                });
        },



        getAllStudents: (req, res) => {
            Student.find().sort({ createdAt: -1 })
                .then(result => {
                    res.send({
                        length: result.length,
                        students: result
                    }
                    )

                })
                .catch(err => {
                    console.log(err);
                });
        }
        ,



    }