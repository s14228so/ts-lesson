let nextid = 0;

export const add = title => {
  return {
    type: "ADD_TODO",
    title,
    id: nextid++
  };
};

export const remove = id => {
  return {
    type: "REMOVE_TODO",
    id
  };
};

export const error = text => {
  return {
    type: "NO_TEXT_ERROR",
    text
  };
};
