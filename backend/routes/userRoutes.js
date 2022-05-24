import express from "express";
const router = express.Router();
import { authUser, getUSerProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUSerProfile)

export default router