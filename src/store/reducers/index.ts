import { ActionTypes } from "../actions/types";
import { AppState } from "../types";

export const reducer = (state: AppState, action: { type: ActionTypes; payload?: any }): AppState => {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        case ActionTypes.GET_GAME:
            return { ...state, game: action.payload };
        case ActionTypes.GET_GAMES:
            return { ...state, games: action.payload };
        case ActionTypes.SEARCH_GAMES:
            return { ...state, games: action.payload };
        case ActionTypes.LOAD_FAVORITES:
            return { ...state, favorites: action.payload };
        case ActionTypes.LIKE_GAME:
            return { ...state, favorites: [...state.favorites, action.payload] };
        case ActionTypes.DISLIKE_GAME:
            return { ...state, favorites: state.favorites.filter(game => game.id !== action.payload) };
        default:
            return state;
    }
};
