import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { StoreContext } from "../store";
import { getGames, testAction } from "../store/actions";

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
        dispatch(getGames());
    }, [dispatch]);

    const renderGames = () => {
        return state.games.map((game: any, id: number) => <li key={id}>{game.name}</li>);
    };

    return (
        <React.Fragment>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact>
                    {console.log(state)}
                    {state.loading ? "Loading..." : <ul>{renderGames()}</ul>}
                </Route>
                <Route path="/contact">Contact</Route>
                <Route path="/favorites">Favorites</Route>
                <Route path="/game/:id">Game</Route>
            </Switch>
        </React.Fragment>
    );
};

export default App;
