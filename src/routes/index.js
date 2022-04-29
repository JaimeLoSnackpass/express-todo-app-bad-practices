import { express } from "express";

import TaskRouter from './tasks';

const router = express.Router();
router.use('/task', TaskRouter);

export default router;