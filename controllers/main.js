const mongodb = require('../db/connect');

const getContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db('professionals').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getContact = async (req, res, next) => {
    const id = req.query.id;
    const result = await mongodb.getDb().db('professionals').collection('contacts').find({ id: id});
    result.toArray().then((contact) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact);
    });
}

module.exports = { 
    getContacts,
    getContact
};

// exports.sendResponse = (req, res) => {
//     res.send("Billy Estella");
// }