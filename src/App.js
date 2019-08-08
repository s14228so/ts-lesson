import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import TodoList from "./containers/TodoList";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import AddTodo from "./containers/AddTodo";
import "./Reset.css";
class App extends Component {
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

export default App;
