import { WORD_FETCHED, ATTEMPT_MADE } from "./types";

const ContextReducer = (state, action) => {
	switch (action.type) {
		case WORD_FETCHED:
			const temp = [];
            const temp2 = [];
			for (let i = 1; i <= 6 ; i++) {
				let newList = ["white", "white", "white", "white", "white"];
				temp.push(newList);

                let vals = ['', '', '', '', ''];
                temp2.push(vals);
			}

			return {
				...state,
				givenWord: action.payload,
				gridState: temp,
                gridAttempt: temp2,
                attempt: 0,
                win: false
			};

		case ATTEMPT_MADE:
			const tempState = [...state.gridState[state.attempt]];
			const curState = [...state.gridState];
            let result = true;

            console.log('tempState', tempState);
            console.log('curState', curState);

            const attemptState = [...state.gridAttempt];
            const curAttempt = [...state.gridAttempt[state.attempt]];

            console.log('attemptState', attemptState);
            console.log('curAttempt', curAttempt);

			const guess = action.payload;
			const solution = state.givenWord;

			for (let i = 0; i < guess.length; i++) {
                curAttempt[i] = guess[i];
				let guessedLetter = guess.charAt(i);
				let solutionLetter = solution.charAt(i);
				if (guessedLetter === solutionLetter) {
					tempState[i] = "green";
				} else if (solution.indexOf(guessedLetter) !== -1) {
                    result = false;
					tempState[i] = "yellow";
				} else {
					tempState[i] = "grey";
                    result = false;
				}
			}

            attemptState[state.attempt] = curAttempt;
			curState[state.attempt] = tempState;

			return {
				...state,
				attempt: state.attempt + 1,
				gridState: curState,
                gridAttempt: attemptState,
                win: result
			};
		default:
			return state;
	}
};

export default ContextReducer;
