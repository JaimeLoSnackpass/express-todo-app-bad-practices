import { express } from "express";
import { TasksController } from "../controllers";

const taskRouter = express.Router();

taskRouter.get('/', TasksController.getTasks);
taskRouter.post('/', TasksController.createTask);
taskRouter.delete('/:id', TasksController.removeTask);
taskRouter.patch('/:id', TasksController.updateTask);

export default taskRouter;