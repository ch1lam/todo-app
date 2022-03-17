/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-17 16:08:53
 * @LastEditTime : 2022-03-17 16:12:32
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\server\src\models\todo.ts
 */
import { ITodo } from "./../types/todo";
import { model, Schema } from "mongoose";
const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
export default model<ITodo>("Todo", todoSchema);
