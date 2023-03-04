const User = require('../models/Users');
var ObjectID = require('mongoose').Types.ObjectId


exports.upload_user = function (req, res) {

    console.log(req.body)

    let newUser = new Users({
        userFullName: req.body.userFullName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
    });

    newUser.save();
    
    res.json({
        data: newUser
    });
}


exports.get_user = function (req, res) {
    let id = req.params.id;

    try {
        User.findById({ _id: id }).exec(function (err, user) {
            if (user) {
                res.send(user);
            } 
        });
      } catch (error) {
        if ([400, 403, 404].includes(error.code)) {
          return res.status(error.code).send(error.message);
        }
    
        console.error(error);
        return res.status(500).send(error.message);
      }
};
