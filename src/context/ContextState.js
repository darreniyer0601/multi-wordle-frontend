import React, { useReducer } from "react";
import ContextObject from "./ContextObject";
import ContextReducer from "./ContextReducer";

import {
    WORD_FETCHED,
    ATTEMPT_MADE,
    TIME_ENDED
} from './types';

const initialState = {
    givenWord: '',
    attempt: 0,
    gridState: [],
    gridAttempt: [],
    win: false
}

const ContextState = (props) => {
    const [state, dispatch] = useReducer(ContextReducer, initialState);

    const getWord = async () => {
        dispatch({
            type: WORD_FETCHED,
            payload: 'venue'
        })
    }

    const userAttempt = (input) => {
        dispatch({
            type: ATTEMPT_MADE,
            payload: input
        })
    }

    const endTimer = () => {
        dispatch({
            type: TIME_ENDED
        })
    }

    return (
        <ContextObject.Provider value={{
            ...state,
            getWord,
            userAttempt,
            endTimer
        }}>
            {props.children}
        </ContextObject.Provider>
    )
}

export default ContextState;