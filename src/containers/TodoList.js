import { connect } from "react-redux";
import TodoList from "../components/TodoList"
import {addToDo, changeStatus, deleteTodo} from "../redux/actions/todoAction";
import {STATUS} from "../redux/reducers/todo";

const validData = Object.values(STATUS);

console.log(validData);
const mapStateToProps = (state, ownProps) => {
  const status = ownProps.match.params.status;

  return ({
    todos: state.todo.filter(todo => status ? todo.status === ownProps.match.params.status : true)
  })
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: newTodo => dispatch(addToDo(newTodo)),
  changeStatus: (newStatus, title) => dispatch(changeStatus(newStatus, title)),
  deleteTodo: (title) => dispatch(deleteTodo(title)),
});

export default connect (mapStateToProps, mapDispatchToProps)(TodoList);