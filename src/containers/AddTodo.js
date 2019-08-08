import { connect } from "react-redux";
import React from "react";
import { add } from "../actions";
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(add(this.state.title));
    this.setState({
      title: ""
    });
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    // this.props.dispatch(add("aaaaa"));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
