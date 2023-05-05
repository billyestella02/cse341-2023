const express = require('express');

const router = express.Router();

const mainController = require('../controllers/main');

router.get('/contacts', mainController.getContacts);

router.get('/contacts/:id', mainController.getContact);

router.post('/contacts', mainController.postContact);

router.put('/contacts/:id', mainController.updateContact);

router.delete('/contacts/:id', mainController.deleteContact);

module.exports =  router;