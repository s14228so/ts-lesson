import { db } from "../plugins/firebase";

export const init = () => async dispatch => {
  const todos = [];
  const snapshot = await db.collection("todos").get();
  await snapshot.forEach(doc =>
    todos.push({
      id: doc.id,
      ...doc.data()
    })
  );
  dispatch({
    type: "INIT",
    payload: todos
  });
};

export const add = title => async dispatch => {
  const todo = {
    title,
    completed: false
  };
  db.collection("todos")
    .add(todo)
    .then(doc => {
      let id = doc.id;
      dispatch({
        type: "ADD_TODO",
        payload: { ...todo, id }
      });
    });
};

export const filter = () => {
  return {
    type: "FILTER_TODO"
  };
};

export const remove = id => async dispatch => {
  await db
    .collection("todos")
    .doc(id)
    .delete();
  await dispatch({
    type: "REMOVE_TODO",
    id
  });
};

export const error = text => {
  return {
    type: "NO_TEXT_ERROR",
    text
  };
};
