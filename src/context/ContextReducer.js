import {
    WORD_FETCHED,
    ATTEMPT_MADE
} from './types';

const ContextReducer = (state, action) => {
    switch (action.type) {
        case WORD_FETCHED:
            const temp = [];
            for (let i = 1 ; i <= 6 ; i++) {
                let newList = ["white", "white", "white", "white", "white"]
                temp.push(newList);
            }

            return {
                ...state,
                givenWord: action.payload,
                gridState: temp
            }
        
        case ATTEMPT_MADE:
            const curState = state.gridState[state.attempt];

            const word = action.payload;

            return {
                ...state,
                attempt: state.attempt + 1,
            }
        default: return state;
    }
}

export default ContextReducer;