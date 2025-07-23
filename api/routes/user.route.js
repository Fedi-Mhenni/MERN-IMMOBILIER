import express from 'express';
import { test } from '../controllers/user.controller.js';   

const router = express.Router();

//req = client/browser
// res = server
router.get('/test', test);

export default router;