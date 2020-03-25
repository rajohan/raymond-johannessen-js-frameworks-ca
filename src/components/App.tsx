import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { StoreContext } from "../store";
import { defaultTheme } from "../themes/defaultTheme";
import { getGames } from "../store/actions";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Home from "./Home";
import Details from "./Details";
import Contact from "./Contact";
import Favorites from "./Favorites";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
     body {
        background-color: ${props => props.theme.colors.primary};
        padding: 0;
        margin: 0;
    }
    
    #root {
        color: ${props => props.theme.colors.text};
        max-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin: 20px;
`;

const App: React.FC = () => {
    const { dispatch } = useContext(StoreContext);

    useEffect(() => {
        dispatch(getGames());
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
