import React from "react";

const initialState = {
    givenWord: '',
    attempt: 0,
    gridState: [],
    gridAttempt: [],
    win: false
}

const ContextObject = React.createContext({
    ...initialState,
    getWord: () => {},
    userAttempt: (input) => {}
});

export default ContextObject;