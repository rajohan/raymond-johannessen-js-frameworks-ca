import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { testAction, StoreContext } from "../store/Store";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
     body {
        background-color: #262626;
    }
    
    #root {
        color: #fff;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 40px;
    }
`;

const App: React.FC = () => {
    const { state, dispatch } = useContext(StoreContext);

    useEffect(() => {
        dispatch(testAction());
    }, [dispatch]);

    return (
        <React.Fragment>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact>
                    Home {console.log(state.test)}
                </Route>
                <Route path="/contact">Contact</Route>
                <Route path="/favourites">Favourites</Route>
                <Route path="/game/:id">Game</Route>
            </Switch>
        </React.Fragment>
    );
};

export default App;
