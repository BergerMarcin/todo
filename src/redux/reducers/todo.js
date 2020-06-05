import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../actions/todoAction"

export const STATUS = {
  start: 'start',
  inprogress: 'inprogress',
  close: 'close'
}

const initialState = [
  {
    title: 'Umyć naczynia',
    status: STATUS.close,
  }
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_TODO):
      return [...state, { ...action.payload, status: STATUS.start}]
    case (CHANGE_STATUS):
      const copy = [...state];
      const index = copy.findIndex(todo => todo.title === action.payload.title);
      copy[index].status = action.payload.newStatus;
      return copy;
    case (DELETE_TODO):
      return state.filter(todo => todo.title !== action.payload);
    default:
      return state;
  }
}

export default todo;