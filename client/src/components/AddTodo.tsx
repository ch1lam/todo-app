/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-08 22:31:46
 * @LastEditTime : 2022-03-18 18:23:29
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\client\src\components\AddTodo.tsx
 */
import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, FormData)}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
