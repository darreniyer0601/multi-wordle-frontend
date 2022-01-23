import React, { useEffect, useReducer, useState } from "react";
// import { io } from "socket.io-client";
import { socket } from "./Socket";

import ContextObject from "./ContextObject";
import ContextReducer from "./ContextReducer";

import {
	WORD_FETCHED,
	ATTEMPT_MADE,
	TIME_ENDED,
	OPPONENT_ATTEMPT,
	ROOM_CREATED,
	ROOM_JOINED,
} from "./types";

const url1 = "http://localhost:8000";
const url2 = "https://multi-wordly-backend.herokuapp.com/";

const initialState = {
	givenWord: "",
	attempt: 0,
	opponentAttempt: 0,
	gridState: [],
	gridAttempt: [],
	opponentState: [],
	win: false,
	players: 0,
	room: null,
	playerId: null,
};

const ContextState = (props) => {
	const [state, dispatch] = useReducer(ContextReducer, initialState);
	// const [socket, setSocket] = useState(null);

	// useEffect(() => {
	// 	const newSocket = io(url1);
	// 	setSocket(newSocket);

	// 	return () => newSocket.close();
	// }, []);

	useEffect(() => {
		socket.on("moveMade", (obj) => {
			dispatch({
				type: OPPONENT_ATTEMPT,
				payload: obj.input,
				id: obj.id
			});
		});

		socket.on("roomJoined", (obj) => {
			if (!state.playerId) {
				dispatch({
					type: ROOM_JOINED,
					room: obj.room,
					players: obj.players,
					id: obj.id,
				});
			}
		});
	}, []);

	const getWord = async () => {
		dispatch({
			type: WORD_FETCHED,
			payload: "venue",
		});
	};

	const createRoom = async (room) => {
		await socket.emit("createRoom", room);

		await socket.on("roomCreated", (obj) => {
			dispatch({
				type: ROOM_CREATED,
				room: obj.room,
				players: obj.players,
				id: obj.id,
			});
		});

		await socket.on("roomExists", (msg) => {
			alert(msg);
		});
	};

	const joinRoom = async (room) => {
		await socket.emit("joinRoom", room);
	};

	const userAttempt = async (input) => {
		await socket.emit("move", input);
		dispatch({
			type: ATTEMPT_MADE,
			payload: input,
		});
	};

	// const opponentMove = (input) => {
	// 	dispatch({
	// 		type: OPPONENT_ATTEMPT,
	// 		payload: input,
	// 	});
	// };

	const endTimer = () => {
		dispatch({
			type: TIME_ENDED,
		});
	};

	return (
		<ContextObject.Provider
			value={{
				...state,
				getWord,
				userAttempt,
				endTimer,
				createRoom,
				joinRoom,
			}}
		>
			{props.children}
		</ContextObject.Provider>
	);
};

export default ContextState;
