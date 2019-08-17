import * as React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import TodoList from "./containers/TodoList";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import AddTodo from "./containers/AddTodo";
import "./Reset.css";
import { init } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/todo"
            render={props => (
              <React.Fragment>
                <AddTodo />
                <TodoList />
              </React.Fragment>
            )}
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { init }
)(App);
