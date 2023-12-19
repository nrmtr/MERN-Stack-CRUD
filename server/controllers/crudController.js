const UserModel = require('../models/User')

const indexController = (req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

const createController = (req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

}

const readController = (req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

const updateController = (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        address:req.body.address,
        tel: req.body.tel
    }).then(users => res.json(users))
    .catch(err => res.json(err))
}

const deletController = (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(users))
    .catch(err => res.json(err))
}

module.exports = {
    indexController,
    createController,
    readController,
    updateController,
    deletController
}