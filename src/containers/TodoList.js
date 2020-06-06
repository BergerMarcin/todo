import { connect } from "react-redux";
import TodoList from "../components/TodoList"
import {addToDo, changeStatus, deleteTodo} from "../redux/actions/todoAction";
import {STATUS} from "../redux/reducers/todo";

const validData = Object.values(STATUS);

const mapStateToProps = (state, ownProps) => {
  let status = validData.includes(ownProps.match.params.status) ? ownProps.match.params.status : null;
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