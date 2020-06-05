export const ADD_TODO = 'ADD_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const DELETE_TODO = 'DELETE_TODO';

export const addToDo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const changeStatus = (newStatus, title) => ({
  type: CHANGE_STATUS,
  payload: {newStatus, title},
});

export const deleteTodo = (title) => ({
  type: DELETE_TODO,
  payload: title,
});
