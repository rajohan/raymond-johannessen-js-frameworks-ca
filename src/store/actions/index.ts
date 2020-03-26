import axios from "axios";

import { ActionTypes } from "./types";
import { GAME_API_URL } from "../../constants";

export const setLoading = (isLoading: boolean): { type: ActionTypes; payload?: any } => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: isLoading
    };
};

export const getGame = (gameId: number): ((dispatch: Function) => Promise<any>) => {
    return async (dispatch: Function) => {
        dispatch({ type: ActionTypes.SET_LOADING, payload: true });

        try {
            const { data } = await axios.get(`${GAME_API_URL}/${gameId}`);
            dispatch({ type: ActionTypes.GET_GAME, payload: data });
        } catch (e) {
            if (e.response.data.detail === "Not found.") {
                return;
            }

            return console.error(e);
        }

        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    };
};

export const getGames = (): ((dispatch: Function) => Promise<any>) => {
    return async (dispatch: Function) => {
        dispatch({ type: ActionTypes.SET_LOADING, payload: true });

        const { data } = await axios.get(`${GAME_API_URL}?page_size=40`);
        dispatch({ type: ActionTypes.GET_GAMES, payload: data.results });

        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    };
};
