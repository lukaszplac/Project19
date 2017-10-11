"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.THUMB_DOWN = exports.THUMB_UP = exports.REMOVE_COMMENT = exports.EDIT_COMMENT = exports.CREATE_COMMENT = undefined;

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CREATE_COMMENT = exports.CREATE_COMMENT = "CREATE_COMMENT";
var EDIT_COMMENT = exports.EDIT_COMMENT = "EDIT_COMMENT";
var REMOVE_COMMENT = exports.REMOVE_COMMENT = "REMOVE_COMMENT";
var THUMB_UP = exports.THUMB_UP = "THUMB_UP";
var THUMB_DOWN = exports.THUMB_DOWN = "THUMB_DOWN";

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
		id: id,
		votes: 1
	};
}

function thumbDown(id) {
	return {
		type: THUMB_DOWN,
		id: id,
		votes: 1
	};
}

module.exports = {
	editComment: editComment,
	removeComment: removeComment,
	thumbUp: thumbUp,
	thumbDown: thumbDown
};
'use strict';

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
			comments: [],
			users: []
};

function comments() {
			var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
			var action = arguments[1];

			var newCommentsState = state.comments;
			switch (action.type) {
						case CREATE_COMMENT:
									return [{
												comment: action.comment,
												id: action.id,
												votes: 0
									}].concat(_toConsumableArray(state.comments));
						case EDIT_COMMENT:
									newCommentsState.find(function (comment) {
												return comment.id === action.id;
									}).comment = action.comment;
									return neCommentsState;
						case REMOVE_COMMENT:
									newCommentsState = state.comments.filter(function (comment) {
												return comment.id != action.id;
									});
									return newCommentsState;
						case THUMB_UP:
									newCommentsState.find(function (comment) {
												return comment.id === action.id;
									}).votes += action.votes;
									return newCommentsState;
						case THUMB_DOWN:
									newCommentsState.find(function (comment) {
												return comment.id === action.id;
									}).votes -= action.votes;
									return newCommentsState;
						default:
									return state;

			}
}

module.exports = comments;
'use strict';

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var _redux = require('redux');

var _redux2 = _interopRequireDefault(_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_comments2.default);
var app = _redux2.default.combineReducers({
	comments: _comments2.default
});
