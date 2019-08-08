import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import TodoList from "./components/pages/TodoList";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import "./Reset.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={TodoList} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
