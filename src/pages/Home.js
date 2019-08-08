import React, { Component } from "react";

import axios from "axios";
class Home extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    this.setState({
      todos: data
    });
    console.log(this.state.todos);
  }
  render() {
    const items = this.state.todos.map(item => {
      return <li key={item.id}>{item.title}</li>;
    });
    return (
      <div style={{ width: "80%", margin: "20px auto" }}>
        <p>〜みんなのTodo〜</p>
        <ul> {items}</ul>
      </div>
    );
  }
}

export default Home;
