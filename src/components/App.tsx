import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { StoreContext } from "../store";
import { defaultTheme } from "../themes/defaultTheme";
import { getGames, loadFavorites } from "../store/actions";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Home from "./Home";
import Details from "./Details";
import Contact from "./Contact";
import Favorites from "./Favorites";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${props => props.theme.font.main};
    }
    
     body {
        background-color: ${props => props.theme.colors.primary};
        padding: 0;
        margin: 0;
        font-size: ${props => props.theme.font.size};
    }
    
    #root {
        color: ${props => props.theme.colors.text};
        max-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    h1 {
        font-size: 20px;
        margin: 10px;
    }
    
    h2 {
        font-size: 18px;
        font-weight: 400;
        margin: 5px;
    }
`;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 20px;
    max-width: 1290px;
    width: 100%;
`;

const App: React.FC = () => {
    const { dispatch } = useContext(StoreContext);

    useEffect(() => {
        dispatch(getGames());
        dispatch(loadFavorites());
    }, [dispatch]);

    return (
        <React.Fragment>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Header />
                <Container>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/favorites">
                            <Favorites />
                        </Route>
                        <Route path="/game/:id">
                            <Details />
                        </Route>
                    </Switch>
                </Container>
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;
