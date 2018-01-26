import  { createStore, combineReducers } from 'redux'

import settingsReducer from './settingsReducer'
import settingsPageReducer from './settingsPageReducer'



const redusers = combineReducers({
    settings: settingsReducer,
    settingsPage: settingsPageReducer
})
const store = createStore(redusers, {
    settings: {
        workTime: 15,
        shortBreak: 3,
        longBreak: 25,
        workIterations: 4,
    },
    settingsPage: {
        tabs: ['Settings', 'Categories'],
        currentTab: 'Settings'
    }

});

store.subscribe( () => {
    console.log("store changed", store.getState());
})

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });

export default store