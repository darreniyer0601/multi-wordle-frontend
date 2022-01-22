import React, { useEffect, useReducer, useState } from "react";
import { io } from "socket.io-client";

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
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const newSocket = io("https://multi-wordly-backend.herokuapp.com/");
		setSocket(newSocket);
		return () => newSocket.close();
	}, []);

	const getWord = async () => {
		dispatch({
			type: WORD_FETCHED,
			payload: "venue",
		});
	};

	const createRoom = async (room) => {
		await socket.emit("createRoom", room);

		socket.on("roomCreated", (obj) => {
			dispatch({
				type: ROOM_CREATED,
				room: obj.room,
				players: obj.players,
				id: obj.id,
			});
		});

		socket.on("roomExists", (msg) => {
			throw new Error(msg);
		});
	};

	const joinRoom = async (room) => {
		await socket.emit("joinRoom", room);

		socket.on("roomJoined", (obj) => {
			dispatch({
				type: ROOM_JOINED,
				room: obj.room,
				players: obj.players,
			});
		});
	};

	const userAttempt = (input) => {
		dispatch({
			type: ATTEMPT_MADE,
			payload: input,
		});
	};

	const opponentMove = (input) => {
		dispatch({
			type: OPPONENT_ATTEMPT,
			payload: input,
		});
	};

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
