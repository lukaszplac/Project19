import * as a from './actions.js';

export function comments(state = [], action ) {
	let newCommentsState = state;
	switch (action.type) {
		case a.CREATE_COMMENT :
					newCommentsState.unshift({
						comment: action.comment,
						id: action.id,
						votes: 0
					});
					return newCommentsState;
		case a.EDIT_COMMENT:
					newCommentsState.find(comment => comment.id === action.id).comment = action.comment;
					return neCommentsState;
		case a.REMOVE_COMMENT:
					newCommentsState = state.comments.filter(comment => comment.id != action.id);
					return newCommentsState;
		case a.THUMB_UP:
					newCommentsState.find(comment => comment.id === action.id).votes += action.votes;
					return newCommentsState;
		case a.THUMB_DOWN:
					newCommentsState.find(comment => comment.id === action.id).votes -= action.votes;
					return newCommentsState;
		default:
					return state;

	}
}