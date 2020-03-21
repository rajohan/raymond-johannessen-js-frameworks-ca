import axios from "axios";

import { ActionTypes } from "./types";
import { GAME_API_URL } from "../../constants";

export function testAction(): { type: ActionTypes; payload?: any } {
    return {
        type: ActionTypes.TEST1,
        payload: "test"
    };
}

export function getGames() {
    return async (dispatch: Function) => {
        const { data } = await axios.get(GAME_API_URL);
        dispatch({ type: ActionTypes.GET_GAMES, payload: data.results });
    };
}
