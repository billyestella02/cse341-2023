const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db('professionals').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('professionals').collection('contacts').find({ _id: id});
    result.toArray().then((contact) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact[0]);
    });
}

const postContact = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db('professionals')
        .collection('contacts')
        .insertOne({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "email": req.body.email,
            "favoriteColor": req.body.favoriteColor,
            "birthday": req.body.birthday
        });
    try {
        res.status(201).json(result);
    } catch (err) {
        res.json({ message: err });
    }                
}

const updateContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('professionals')
        .collection('contacts')
        .updateOne(
            { _id: id }, 
            { $set: { favoriteColor: req.body.favoriteColor, birthday: req.body.birthday } }
        );
    res.status(204).json(result);
}

const deleteContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('professionals')
        .collection('contacts')
        .deleteOne({ _id: id });
    res.status(200).json(result);
}

module.exports = { 
    getContacts,
    getContact,
    postContact,
    updateContact,
    deleteContact
};