import React from "react";
import AddToDo from './AddToDo'
import {STATUS} from "../redux/reducers/todo";

const TodoList = ({todos, addTodo, changeStatus, deleteTodo}) => {
  return (
    <div>
      <h1>My TODO list</h1>
      {/*  iterujemy todos */}
      {console.log(todos)}
      <ul>
        {todos.map((t, index) =>
          <li key={index}>
            {t.title}, status: {t.status}
            <button onClick={() => changeStatus(STATUS.inprogress, t.title)}>In Progress</button>
            <button onClick={() => changeStatus(STATUS.closed, t.title)}>Closed</button>
            <button onClick={() => deleteTodo(t.title)}>Delete</button>
        </li>)}
      </ul>
      <h1>Add new ToDo:</h1>
      <AddToDo add={addTodo}/>
    </div>
  );
};

export default TodoList;