const express = require('express');
const userController = require('../controller/UserController');
const Auth = require('../middleware/AuthMiddleware');
const router = express.Router();


// Register Route
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register Users (Admin, Normal User)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Rajeev Gupta
 *               email:
 *                 type: string
 *                 example: rajeev29@gmail.com
 *               password:
 *                 type: string
 *                 example: 112233
 *               role:
 *                 type: string
 *                 example: Superadmin
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: Rajeev Gupta
 *                 email:
 *                   type: string
 *                   example: rajeev@gmail.com
 *                 role:
 *                   type: string
 *                   example: SuperAdmin
 */
router.post('/register', userController.register);

// =====================================   Login Route
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login Users (SuperAdmin, Admin, Normal User)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 connect.sid:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */
router.post('/login', userController.login);

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