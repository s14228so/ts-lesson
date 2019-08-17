import Action from "../types/action";
import Error from "../types/error";

const error = (state: Error, action: Action) => {
  switch (action.type) {
    case "NO_TEXT_ERROR":
      return action.title;
    default:
      return state;
  }
};

export default error;
