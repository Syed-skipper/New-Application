// const Sampledata = require('./Modules/sampleModule')


// function VerifyEmail(req, res, next) {
//     console.log(req.body)
//     Sampledata.findAll({ where:{email:req.body.email} }).then(function (user) {
//         console.log(user)
//         if (user.email === req.body.email) {
//             res.status(500).send({ msg: 'Email already exist' })
//         }
//         else {
//             next();
//         }
//     }, function (err) {
//         res.send(err)
//     })

// }

// module.exports = VerifyEmail;


