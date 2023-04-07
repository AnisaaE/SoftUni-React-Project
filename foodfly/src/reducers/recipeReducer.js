export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'RECIPE_FETCH':
            return { ...action.payload };
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            username: action.userUsername,
                            userId: action.userId
                        }
                    }
                ],
            }
        case 'COMMENT_DELETE':
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.commentId),
            }
        default:
            return state;
    }
}; 