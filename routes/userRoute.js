import express from 'express';
import {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public Routes
router.post('/', createUser);          // Register
router.post('/login', loginUser);      // Login

// Protected Routes
router.get('/', protect, getAllUsers); // Get all users (requires token)
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

export default router;
