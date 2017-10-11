import actions from './actions';

let initialState = {
	comments: [],
	users: []
}

function comments(state = initialState, action ) {
	let newCommentsState = state.comments;
	switch (action.type) {
		case CREATE_COMMENT :
					return [{
						comment: action.comment,
						id: action.id,
						votes: 0
					}, ...state.comments];
		case EDIT_COMMENT:
					newCommentsState.find(comment => comment.id === action.id).comment = action.comment;
					return neCommentsState;
		case REMOVE_COMMENT:
					newCommentsState = state.comments.filter(comment => comment.id != action.id);
					return newCommentsState;
		case THUMB_UP:
					newCommentsState.find(comment => comment.id === action.id).votes += action.votes;
					return newCommentsState;
		case THUMB_DOWN:
					newCommentsState.find(comment => comment.id === action.id).votes -= action.votes;
					return newCommentsState;
		default:
					return state;

	}
}