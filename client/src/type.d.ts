/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-08 22:27:41
 * @LastEditTime : 2022-03-08 22:55:37
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\client\src\type.d.ts
 */
interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createAt?: string;
  updateAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
