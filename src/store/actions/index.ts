import axios from "axios";

import { ActionTypes } from "./types";
import { FAVORITES_LOCAL_STORAGE, GAME_API_URL, PAGE_SIZE } from "../../constants";
import { Action, AppState } from "../types";

export const setLoading = (isLoading: boolean): Action => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: isLoading
    };
};

export const getGame = (gameId: number): ((dispatch: Function) => Promise<void>) => {
    return async (dispatch: Function): Promise<void> => {
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

export const getGames = (): ((dispatch: Function) => Promise<void>) => {
    return async (dispatch: Function): Promise<void> => {
        dispatch(setLoading(true));

        const { data } = await axios.get(`${GAME_API_URL}?${PAGE_SIZE}`);
        dispatch({ type: ActionTypes.GET_GAMES, payload: data.results });

        dispatch(setLoading(false));
    };
};

export const searchGames = (query: string): ((dispatch: Function) => Promise<void>) => {
    return async (dispatch: Function): Promise<void> => {
        dispatch(setLoading(true));

        const { data } = await axios.get(`${GAME_API_URL}?search=${query}&${PAGE_SIZE}`);
        dispatch({ type: ActionTypes.SEARCH_GAMES, payload: data.results });

        dispatch(setLoading(false));
    };
};

export const loadFavorites = (): Action => {
    const favorites = localStorage.getItem(FAVORITES_LOCAL_STORAGE);

    if (favorites) {
        return { type: ActionTypes.LOAD_FAVORITES, payload: JSON.parse(favorites) };
    } else {
        return { type: ActionTypes.LOAD_FAVORITES, payload: [] };
    }
};

export const updateFavorites = (gameId: number): ((dispatch: Function, getState: () => AppState) => Promise<void>) => {
    return async (dispatch: Function, getState: () => AppState): Promise<void> => {
        const state = getState();

        if (state.favorites.filter(game => gameId === game.id).length > 0) {
            localStorage.setItem(
                FAVORITES_LOCAL_STORAGE,
                JSON.stringify(state.favorites.filter(game => game.id !== gameId))
            );

            dispatch({ type: ActionTypes.DISLIKE_GAME, payload: gameId });
        } else {
            let game = state.games?.filter(game => game.id === gameId)[0];

            if (!game) {
                const { data } = await axios.get(`${GAME_API_URL}/${gameId}`);
                game = data;
            }

            localStorage.setItem(FAVORITES_LOCAL_STORAGE, JSON.stringify([...state.favorites, game]));

            dispatch({ type: ActionTypes.LIKE_GAME, payload: game });
        }
    };
};
