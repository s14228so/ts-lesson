const todos = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter(item => {
        if (item.id === action.id) {
          item.completed = !item.completed;
        }
        return !item.completed;
      });

    case "FILTER_TODO":
      return state.filter(item => {
        return item.completed;
      });
    default:
      return state;
  }
};

export default todos;
