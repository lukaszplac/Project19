"use strict";

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_COMMENT = "CREATE_COMMENT";
var EDIT_COMMENT = "EDIT_COMMENT";
var REMOVE_COMMENT = "REMOVE_COMMENT";
var THUMB_UP = "THUMB_UP";
var THUMB_DOWN = "THUMB_DOWN";

function addComment(comment) {
	return {
		type: CREATE_COMMENT,
		comment: comment,
		id: _uuid2.default.v4()
	};
}

function editComment(id, newContent) {
	return {
		type: EDIT_COMMENT,
		comment: newContent,
		id: id
	};
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	};
}

function thumbUp(id) {
	return {
		type: THUMB_UP,
		id: id
	};
}

function thumbDown(id) {
	return {
		type: THUMB_UP,
		id: id
	};
}

module.exports = {
	editComment: editComment,
	removeComment: removeComment,
	thumbUp: thumbUp,
	thumbDown: thumbDown
};
