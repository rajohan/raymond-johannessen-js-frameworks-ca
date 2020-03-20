import React, { createContext, useReducer } from "react";

enum ActionTypes {
    TEST1 = "TEST1",
    TEST2 = "TEST2"
}

type Action = {
    type: ActionTypes;
    payload?: any;
};

type StoreApi = {
    state: AppState;
    dispatch: (action: Action) => void;
};

type AppState = {
    games: [];
    loading: boolean;
    test: string;
};

export const testAction = (): Action => ({
    type: ActionTypes.TEST1,
    payload: "test"
});

// export const testAction2 = () : Action => {
//     return async () => {
//         await setTimeout(() => ({ type: ActionTypes.TEST2, payload: "test2" }), 1000);
//     };
// };

const initialState: AppState = {
    games: [],
    loading: true,
    test: ""
};

const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case ActionTypes.TEST1:
            return { ...state, test: action.payload };
        case ActionTypes.TEST2:
            return { ...state, test: action.payload };
        default:
            return state;
    }
};

const StoreContext = createContext({} as StoreApi);

const StoreProvider: React.FC = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <StoreContext.Provider value={{ state, dispatch }}>{props.children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
