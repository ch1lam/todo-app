/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-17 16:08:06
 * @LastEditTime : 2022-03-17 16:50:45
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\server\src\types\todo.ts
 */
import { Document } from "mongoose";
export interface ITodo extends Document {
  name: string;
  description: string;
  status: boolean;
}
