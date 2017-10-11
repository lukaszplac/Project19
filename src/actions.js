import uuid from "uuid";

export const CREATE_COMMENT = "CREATE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const THUMB_UP = "THUMB_UP";
export const THUMB_DOWN = "THUMB_DOWN";

function addComment(comment) {
	return {
		type: CREATE_COMMENT,
		comment: comment,
		id: uuid.v4()
	}
}

function editComment(id, newContent) {
	return {
		type: EDIT_COMMENT,
		comment: newContent,
		id: id
	}
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
}

function thumbUp(id) {
	return {
		type: THUMB_UP,
		id: id,
		votes: 1
	}
}

function thumbDown(id) {
	return {
		type: THUMB_DOWN,
		id: id,
		votes: 1
	}
}


module.exports = {
	editComment: editComment,
	removeComment: removeComment,
	thumbUp: thumbUp,
	thumbDown: thumbDown
}