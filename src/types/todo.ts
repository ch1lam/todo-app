/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-08 15:01:00
 * @LastEditTime : 2022-03-08 16:27:21
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\src\types\todo.ts
 */
import { Document } from "mongoose";
export interface ITodo extends Document {
  name: string;
  description: string;
  status: boolean;
}
