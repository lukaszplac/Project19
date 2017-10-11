import {createStore} from 'redux';
import {reducers} from './reducers.js';
import * as a from './actions.js';

const app = createStore(reducers);

app.subscribe(() => console.log(app.getState()));

app.dispatch(a.addComment("New Comment 1"));
console.log("---");
app.dispatch(a.addComment("New Comment 2"));