const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
      ];
    case "REMOVE_TODO":
      return state.filter(item => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default todos;
