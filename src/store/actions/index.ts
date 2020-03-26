import axios from "axios";

import { ActionTypes } from "./types";
import { FAVORITES_LOCAL_STORAGE, GAME_API_URL, PAGE_SIZE, SEARCH_ORDER } from "../../constants";
import { AppState } from "../types";

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

export const loadFavorites = (): ((dispatch: Function) => Promise<any>) => {
    return async (dispatch: Function) => {
        const favorites = await localStorage.getItem(FAVORITES_LOCAL_STORAGE);

        if (favorites) {
            dispatch({ type: ActionTypes.LOAD_FAVORITES, payload: JSON.parse(favorites) });
        }
    };
};

export const updateFavorites = (gameId: number): ((dispatch: Function, getState: () => AppState) => Promise<any>) => {
    return async (dispatch: Function, getState: () => AppState) => {
        const state = getState();

        if (state.favorites.filter(game => gameId === game.id).length > 0) {
            await localStorage.setItem(
                FAVORITES_LOCAL_STORAGE,
                JSON.stringify(state.favorites.filter(game => game.id !== gameId))
            );

            dispatch({ type: ActionTypes.DISLIKE_GAME, payload: gameId });
        } else {
            await localStorage.setItem(
                FAVORITES_LOCAL_STORAGE,
                JSON.stringify([...state.favorites, state.games?.filter(game => game.id === gameId)[0]])
            );

            dispatch({ type: ActionTypes.LIKE_GAME, payload: state.games?.filter(game => game.id === gameId)[0] });
        }
    };
};
