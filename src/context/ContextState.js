import React, { useReducer } from "react";
import ContextObject from "./ContextObject";
import ContextReducer from "./ContextReducer";

import {
    WORD_FETCHED,
    ATTEMPT_MADE
} from './types';

const initialState = {
    givenWord: '',
    attempt: 0,
    gridState: [],
    gridAttempt: [],
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

    return (
        <ContextObject.Provider value={{
            ...state,
            getWord,
            userAttempt
        }}>
            {props.children}
        </ContextObject.Provider>
    )
}

export default ContextState;