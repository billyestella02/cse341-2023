const express = require('express');

const router = express.Router();

const mainController = require('../controllers/main');

router.get('/contacts', mainController.getContacts);

router.get('/contact', mainController.getContact);

module.exports =  router;