/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-08 15:01:14
 * @LastEditTime : 2022-03-08 21:49:16
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\src\routes\index.ts
 */
import { Router } from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router: Router = Router();
router.get("/todos", getTodos);
router.post("/add-todo", addTodo);
router.put("/edit-todo/:id", updateTodo);
router.delete("/deleted-todo/:id", deleteTodo);

export default router;
