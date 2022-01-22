import React, { useReducer } from "react";
import ContextObject from "./ContextObject";
import ContextReducer from "./ContextReducer";

import {
    WORD_FETCHED,
    ATTEMPT_MADE,
    TIME_ENDED,
    OPPONENT_ATTEMPT
} from './types';

const initialState = {
    givenWord: '',
    attempt: 0,
    opponentAttempt: 0,
    gridState: [],
    gridAttempt: [],
    opponentState: [],
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

    const opponentMove = (input) => {
        dispatch({
            type: OPPONENT_ATTEMPT,
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