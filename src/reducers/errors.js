const error = (state = "", action) => {
  switch (action.type) {
    case "NO_TEXT_ERROR":
      return action.text;
    default:
      return state;
  }
};

export default error;
