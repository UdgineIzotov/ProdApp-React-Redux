/**
 * Created by Evhenii_Izotov on 1/26/2018.
 */
export default (state = {}, actions) => {
    console.log(state, actions);

    switch(actions.type) {
        case 'INC_WORKTIME':{
            const workTime = state.workTime + 5;
            if (workTime >= 15 && workTime <= 25) {
                state = {...state, workTime};
            }

            break;
        }
        case 'DEC_WORKTIME': {
            const workTime = state.workTime - 5;
            if (workTime >= 15 && workTime <= 25) {
                state = {...state, workTime};
            }

            break;
        }
        case 'INC_WORKITERATIONS': {
            const workIterations = state.workIterations + 1;
            if (workIterations >= 2 && workIterations <= 5) {
                state = {...state, workIterations};
            }

            break;
        }
        case 'DEC_WORKITERATIONS': {
            const workIterations = state.workIterations - 1;
            if (workIterations >= 2 && workIterations <= 5) {
                state = {...state, workIterations};
            }

            break;
        }
        case 'INC_SHORTBREACK': {
            const shortBreak = state.shortBreak + 1;
            if (shortBreak >= 3 && shortBreak <= 5) {
                state = {...state, shortBreak};
            }

            break;
        }
        case 'DEC_SHORTBREACK': {
            const shortBreak = state.shortBreak - 1;
            if (shortBreak >= 3 && shortBreak <= 5) {
                state = {...state, shortBreak};
            }

            break;
        }
        case 'INC_LONGBREACK': {
            const longBreak = state.longBreak + 5;
            if (longBreak >= 15 && longBreak <= 30) {
                state = {...state, longBreak};
            }

            break;
        }
        case 'DEC_LONGBREACK': {
            const longBreak = state.longBreak - 5;
            if (longBreak >= 15 && longBreak <= 30) {
                state = {...state, longBreak};
            }

            break;
        }
        default: break;
    }
    return state;
}