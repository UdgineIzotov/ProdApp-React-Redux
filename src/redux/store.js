import  { createStore } from 'redux'

const taskList = ( state = [], action) => {
    console.log(action);
    return state;
}

const store = createStore(taskList);

console.log(store.getState());

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });

export default store