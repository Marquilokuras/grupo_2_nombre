const express = require('express');
const routerUsers = express.Router();
const usersController = require('../controller/usersController');

/** MIDDLEWARE **/
const upload = require('../middlewares/multer');

/** VALIDACIONES **/
const { arrRegister, validateRegister } = require('../middlewares/validateRegister');

routerUsers.get('/', usersController.renderLogin);

routerUsers.get('/register', usersController.renderRegister);

routerUsers.post('/register', upload.single("foto"), arrRegister, validateRegister, usersController.createUser);   // /register(POST) Accion de creacion, donde se envia el formulario del Usuario

module.exports = routerUsers;