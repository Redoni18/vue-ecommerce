const Categories = require('../models/Categories');
var ObjectID = require('mongoose').Types.ObjectId

exports.get_categories = function (req, res) {
    Categories.find((err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while retrieving data')
        }
    })
};

exports.upload_category = function (req, res) {

    console.log(req.body)

    let newCategory = new Categories({
        categoryName: req.body.categoryName,
        categoryBrand: req.body.categoryBrand
    });

    newCategory.save();
    
    res.json({
        data: newCategory
    });
}

exports.edit_category = function (req, res) {

    if(!ObjectID.isValid(req.body._id)){
        return res.status(400).send(`No record with given id:   ${req.body._id}`)
    }

    let updatedCategory = {
        categoryName: req.body.categoryName,
        categoryBrand: req.body.categoryBrand
    }

    Categories.findByIdAndUpdate(req.body._id, {$set: updatedCategory}, {new: true}, (err, doc) => {
        if(!err){
            res.send(doc)
        }else{
            console.log('Error while updating category')
        }
    })
}

exports.delete_category = function (req, res) {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(`No record with given id: ${req.params.id}`)
    }

    Categories.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){
            res.send(docs)
        }else{
            console.log('Error while deleting record')
        }
    })
}

exports.get_category = function (req, res) {
    let id = req.params.id;

    try {
        Categories.findById({ _id: id }).exec(function (err, category) {
            if (category) {
                res.send(category);
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
