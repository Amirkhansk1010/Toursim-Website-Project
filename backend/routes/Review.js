import express from 'express';
import { createReview } from '../controllers/ReviewController.js';
import { verifyUser } from '../utils/VerifyToken.js';

const router = express.Router();

router.post('/:tourId', verifyUser, createReview);

export default router;