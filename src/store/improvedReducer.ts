import { Reducer, useCallback, useReducer, useRef } from "react";

import { ActionTypes } from "./actions/types";
import { AppState } from "./types";

export const useImprovedReducer = (reducer: Reducer<AppState, any>, initialState: AppState) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const prevState = useRef({});

    const improvedDispatch: any = useCallback((action: { type: ActionTypes; payload?: any } | Function) => {
        if (typeof action === "function") {
            return action(improvedDispatch, () => prevState.current);
        }

        dispatch(action);
    }, []);

    prevState.current = state;

    return [state, improvedDispatch];
};
