export const recipeReducer = (state, action) => {
  console.log(action.payload + "this is payload");
  switch (action.type) {
    case "RECIPE_FETCH":
      return { ...action.payload };
    case "COMMENT_ADD":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload,
            author: {
                ...action.payload.author,
              username: action.payload.author.username, 
              userId: action.payload.author.userId,
            },
          },
        ],
      };
    case "COMMENT_DELETE":
      const updatedComments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
      return {
        ...state,
        comments: updatedComments,
      };

    default:
      return state;
  }
};
