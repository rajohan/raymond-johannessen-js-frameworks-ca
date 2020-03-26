import React, { useContext } from "react";

import { StoreContext } from "../../store";
import Card from "../Shared/Card";
import Loading from "../Shared/Loading";
import styled from "styled-components";

const MarginTop = styled.div`
    margin-top: 10px;
`;

const StyledFavorites = styled.div`
    display: grid;
    width: 100%;
    margin: 15px 0;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    justify-content: center;
`;

const Favorites: React.FC = () => {
    const { state } = useContext(StoreContext);

    const renderGames = () => {
        return state.favorites.map(game => <Card key={`gameId-${game.id}`} game={game} />);
    };

    return (
        <React.Fragment>
            <h1>Your Favorites</h1>
            {!state.loading && state.favorites.length < 1 ? (
                <MarginTop>You do not have any favorites yet.</MarginTop>
            ) : state.loading ? (
                <MarginTop>
                    <Loading />
                </MarginTop>
            ) : (
                <StyledFavorites>{renderGames()}</StyledFavorites>
            )}
        </React.Fragment>
    );
};

export default Favorites;
