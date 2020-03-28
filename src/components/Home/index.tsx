import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "../../store";
import Card from "../Shared/Card";
import Search from "../Search";
import Loading from "../Shared/Loading";

const StyledHome = styled.div`
    display: grid;
    width: 100%;
    margin: 15px 0;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    justify-content: center;
`;

const Home: React.FC = (): React.ReactElement => {
    const { state } = useContext(StoreContext);

    const renderGames = (): React.ReactNode => {
        return state.games?.map(game => <Card key={`gameId-${game.id}`} game={game} />);
    };

    return (
        <React.Fragment>
            <h1>Discover New Games</h1>
            <Search />
            {!state.loading && state.games && state.games.length < 1 ? (
                "Sorry, we could not find any games matching your search terms."
            ) : state.loading ? (
                <Loading />
            ) : (
                <StyledHome>{renderGames()}</StyledHome>
            )}
        </React.Fragment>
    );
};

export default Home;
