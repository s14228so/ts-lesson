import React from "react";

const one = {
  background: "lightgray",
  borderBottom: "1px #000 dotted"
};
const Todo = ({ todo, remove }) => {
  return (
    <div style={one} onClick={() => remove(todo.id)}>
      {todo.title}
    </div>
  );
};

export default Todo;
