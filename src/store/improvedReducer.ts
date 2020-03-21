import { Reducer, useCallback, useReducer } from "react";

import { ActionTypes } from "./actions/types";
import { AppState } from "./types";

export function useImprovedReducer(reducer: Reducer<AppState, any>, initialState: AppState) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const improvedDispatch: any = useCallback((action: { type: ActionTypes; payload?: any } | Function) => {
        if (typeof action === "function") {
            return action(improvedDispatch);
        }

        dispatch(action);
    }, []);

    return [state, improvedDispatch];
}
