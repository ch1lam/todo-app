/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-17 16:07:39
 * @LastEditTime : 2022-03-17 16:16:24
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\server\src\routes\index.ts
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
router.delete("/delete-todo/:id", deleteTodo);

export default router;
