import React from "react";

const initialState = {
    givenWord: '',
    attempt: 0,
    gridState: [],
    gridAttempt: [],
}

const ContextObject = React.createContext({
    ...initialState,
    getWord: () => {},
    userAttempt: (input) => {}
});

export default ContextObject;