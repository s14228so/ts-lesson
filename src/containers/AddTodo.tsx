import { useDispatch } from "react-redux";
import React, { FunctionComponent, useState } from "react";
import { add, error } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Error from "../types/error";
import newTodo from "../types/newTodo";
// import { AppState } from "../reducers";

// const mapStateToProps = (state: AppState ): any => {
//   return {
//     errors: state.errors
//   };
// };

// const mapDispatchToProps = (dispatch: any): any => {
//   add: (title: string) => dispatch(add(title))
//   error: (title: string) => dispatch(error(title))
// };
interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}

const AddTodo: FunctionComponent = (): JSX.Element => {
  // type FormElem = React.FormEvent<HTMLInputElement>;
  const [newTodo, setTodo] = useState<newTodo>();
  const [error, setError] = useState<Error>();
  const dispatch = useDispatch();

  const handleSubmit = (e: HTMLElementEvent<HTMLInputElement>): void => {
    e.preventDefault();

    if (newTodo.title === "") {
      setError({ message: "文字を入力してね！" });
      return;
    }

    if (newTodo.title.length > 35) {
      return;
    }

    setError({ message: "" });
    dispatch(add(newTodo.title));

    setTodo({
      title: "",
      count: 0
    });
  };
  const handleChange = (e: HTMLElementEvent<HTMLInputElement>): void => {
    const length: number = e.target.value.length;
    if (length > 35) {
      dispatch(setError({ message: "文字数が多すぎるよ！" }));
    } else {
      dispatch(setError({ message: "" }));
    }
    setTodo({
      title: "",
      count: 0
    });
    // setTodo({
    //   title: e.target.value,
    //   count: length
    // });
  };
  // this.props.dispatch(add("aaaaa"));
  return (
    <div
      style={{
        width: "50%",
        textAlign: "center",
        margin: "0 auto"
      }}
    >
      <form>
        <input
          style={{
            padding: "10px 15px",
            width: "80%",
            marginTop: "20px",
            borderRadius: "10px"
          }}
          type="text"
          value={newTodo.title}
          onChange={handleChange}
        />{" "}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add
        </Button>
        <br />
        {newTodo.count}/35
      </form>
      <div className="error" style={{ color: "red" }}>
        {error}
      </div>
    </div>
  );
};

export default AddTodo;
