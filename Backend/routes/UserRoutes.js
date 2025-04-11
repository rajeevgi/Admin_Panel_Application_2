const express = require('express');
const userController = require('../controller/UserController');
const Auth = require('../middleware/AuthMiddleware');
const router = express.Router();

// Login Route
router.post('/login', userController.login);

// Register Route
router.post('/register', userController.register);

// Get All Users
router.get('/getAllUsers', Auth.isAuthenticated, Auth.isAdmin, userController.getAllUsers);

// Add Users
router.post('/addUser', Auth.isAuthenticated, Auth.isAdmin, userController.addUser);

// Get User By Id
router.get('/getUserById/:id', Auth.isAuthenticated, Auth.isUser, userController.getUserById);

// Delete User
router.delete('/deleteUser/:id', Auth.isAuthenticated, Auth.isAdmin, userController.deleteUser);

// Update User
router.put('/updateUser/:id', Auth.isAuthenticated, Auth.isAdmin, userController.updateUser);

module.exports = router;