import {
	WORD_FETCHED,
	ATTEMPT_MADE,
	TIME_ENDED,
	OPPONENT_ATTEMPT,
} from "./types";

const ContextReducer = (state, action) => {
	switch (action.type) {
		case WORD_FETCHED:
			const temp = [];
			const opp = [];
			const temp2 = [];
			for (let i = 1; i <= 6; i++) {
				let newList = ["white", "white", "white", "white", "white"];
				temp.push(newList);
				opp.push(newList);

				let vals = ["", "", "", "", ""];
				temp2.push(vals);
			}

			return {
				...state,
				givenWord: action.payload,
				gridState: temp,
				gridAttempt: temp2,
				opponentState: opp,
				attempt: 0,
				win: false,
			};

		case ATTEMPT_MADE:
			let t1 = state.gridState[state.attempt];
			const tempState = [...t1];

			const curState = [];
			state.gridState.forEach((obj) => {
				curState.push(obj);
			});

			let result = true;

			let t2 = state.gridAttempt[state.attempt];
			const attemptState = [...t2];

			const curAttempt = [];
			state.gridAttempt.forEach((obj) => {
				curAttempt.push(obj);
			});

			const guess = action.payload;
			const solution = state.givenWord;

			for (let i = 0; i < guess.length; i++) {
				attemptState[i] = guess[i];
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

			curAttempt[state.attempt] = attemptState;
			curState[state.attempt] = tempState;

			return {
				...state,
				attempt: state.attempt + 1,
				gridState: curState,
				gridAttempt: curAttempt,
				win: result,
			};
		case OPPONENT_ATTEMPT:
			let t3 = state.opponentState[state.opponentAttempt];
			const tempOppState = [...t3];

			const curOppState = [];
			state.opponentState.forEach((obj) => {
				curOppState.push(obj);
			});

			let res = true;

			const oppGuess = action.payload;

			for (let i = 0; i < oppGuess.length; i++) {
				let guessedLetter = oppGuess.charAt(i);
				let solutionLetter = solution.charAt(i);
				if (guessedLetter === solutionLetter) {
					tempOppState[i] = "green";
				} else if (solution.indexOf(guessedLetter) !== -1) {
					result = false;
					tempOppState[i] = "yellow";
				} else {
					tempOppState[i] = "grey";
					result = false;
				}
			}

			curOppState[state.opponentAttempt] = tempOppState;

			let usr_res = false;

			if (res === false && state.opponentAttempt >= 6) {
				usr_res = true;
			}

			return {
				...state,
				opponentState: tempOppState,
				opponentAttempt: state.opponentAttempt + 1,
				win: usr_res,
			};
		case TIME_ENDED:
			return {
				...state,
				win: false,
				attempt: 7,
			};
		default:
			return state;
	}
};

export default ContextReducer;
