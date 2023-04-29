const express = require('express');

const router = express.Router();

const mainController = require('../controllers/main');

router.get('/contacts', mainController.getContacts);

router.get('/contacts/:id', mainController.getContact);

module.exports =  router;