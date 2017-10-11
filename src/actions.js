import uuid from "uuid";

const CREATE_COMMENT = "CREATE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const THUMB_UP = "THUMB_UP";
const THUMB_DOWN = "THUMB_DOWN";

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
		id: id
	}
}

function thumbDown(id) {
	return {
		type: THUMB_UP,
		id: id
	}
}


module.exports = {
	editComment: editComment,
	removeComment: removeComment,
	thumbUp: thumbUp,
	thumbDown: thumbDown
}