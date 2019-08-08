import { connect } from "react-redux";
import React from "react";
import { add, error } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.title === "") {
      this.props.dispatch(error("文字を入力してね"));
      return;
    }
    this.props.dispatch(error(""));
    this.props.dispatch(add(this.state.title));
    this.setState({
      title: ""
    });
  };
  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    const add = {
      width: "50%",
      textAlign: "center",
      margin: "0 auto"
    };

    // this.props.dispatch(add("aaaaa"));
    return (
      <div style={add}>
        <form>
          <input
            style={{
              padding: "10px 15px",
              width: "80%",
              marginTop: "20px",
              borderRadius: "10px"
            }}
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />{" "}
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Add
          </Button>
        </form>
        <div className="error" style={{ color: "red" }}>
          {this.props.errors}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(AddTodo);
