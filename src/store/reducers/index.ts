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
        default:
            return state;
    }
};
