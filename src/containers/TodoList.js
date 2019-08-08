import { connect } from "react-redux";

import TodoList from "../components/TodoList";
import { remove } from "../actions";
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(remove(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
