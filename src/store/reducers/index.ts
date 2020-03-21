import { ActionTypes } from "../actions/types";
import { AppState } from "../types";

export function reducer(state: AppState, action: { type: ActionTypes; payload?: any }): AppState {
    switch (action.type) {
        case ActionTypes.TEST1:
            return { ...state, test: action.payload };
        case ActionTypes.TEST2:
            return { ...state, test: action.payload };
        case ActionTypes.GET_GAMES:
            return { ...state, loading: false, games: action.payload };
        default:
            return state;
    }
}
