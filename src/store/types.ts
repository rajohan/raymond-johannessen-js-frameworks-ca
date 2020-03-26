import { ActionTypes } from "./actions/types";

export type Action = {
    type: ActionTypes;
    payload?: any;
};

export type StoreApi = {
    state: AppState;
    dispatch: (action: Action | Function) => void;
};

export type Game = {
    id: number;
    name: string;
    background_image: string;
    rating: string;
    released: string;
    genres: [{ name: string }];
    platforms: [{ platform: { name: string } }];
    description_raw: string;
    website: string;
};

export type AppState = {
    game?: Game;
    games?: Game[];
    favorites: Game[];
    loading: boolean;
    state?: {};
};
