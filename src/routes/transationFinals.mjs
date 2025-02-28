import express from 'express'
import * as transactionFinalsController from '../controller/transactionFinal.mjs'
import { authenticateToken } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/transaction-final', authenticateToken, transactionFinalsController.createFinalController);

export default router;
