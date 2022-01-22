import React from "react";

const initialState = {
    givenWord: '',
    attempt: 0,
    opponentAttempt: 0,
    gridState: [],
    gridAttempt: [],
    opponentState: [],
    win: false
}

const ContextObject = React.createContext({
    ...initialState,
    getWord: () => {},
    userAttempt: (input) => {},
    endTimer: () => {}
});

export default ContextObject;