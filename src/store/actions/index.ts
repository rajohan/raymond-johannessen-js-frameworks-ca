import axios from "axios";

import { ActionTypes } from "./types";
import { GAME_API_URL, PAGE_SIZE, SEARCH_ORDER } from "../../constants";

export const setLoading = (isLoading: boolean): { type: ActionTypes; payload?: any } => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: isLoading
    };
};

export const getGame = (gameId: number): ((dispatch: Function) => Promise<any>) => {
    return async (dispatch: Function) => {
        dispatch(setLoading(true));

        try {
            const { data } = await axios.get(`${GAME_API_URL}/${gameId}`);
            dispatch({ type: ActionTypes.GET_GAME, payload: data });
        } catch (e) {
            if (e.response.data.detail === "Not found.") {
                return;
            }

            return console.error(e);
        }

        dispatch(setLoading(false));
    };
};

export const getGames = (): ((dispatch: Function) => Promise<any>) => {
    return async (dispatch: Function) => {
        dispatch(setLoading(true));

        const { data } = await axios.get(`${GAME_API_URL}?${PAGE_SIZE}`);
        dispatch({ type: ActionTypes.GET_GAMES, payload: data.results });

        dispatch(setLoading(false));
    };
};

export const searchGames = (query: string): ((dispatch: Function) => Promise<any>) => {
    return async (dispatch: Function) => {
        dispatch(setLoading(true));

        const { data } = await axios.get(`${GAME_API_URL}?search=${query}&${PAGE_SIZE}&${SEARCH_ORDER}`);
        dispatch({ type: ActionTypes.SEARCH_GAMES, payload: data.results });

        dispatch(setLoading(false));
    };
};
