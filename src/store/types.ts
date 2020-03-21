import { ActionTypes } from "./actions/types";

export type Action = {
    type: ActionTypes;
    payload?: any;
};

export type StoreApi = {
    state: AppState;
    dispatch: (action: Action | Function) => void;
};

export type AppState = {
    games: [];
    loading: boolean;
    test: string;
    state?: {};
};
