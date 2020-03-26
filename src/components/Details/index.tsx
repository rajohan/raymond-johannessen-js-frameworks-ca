import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getGame } from "../../store/actions";
import { StoreContext } from "../../store";
import Tags from "../Shared/Tags";
import Button from "../Shared/Form/Button";
import Loading from "../Shared/Loading";

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.tertiary};
    padding-bottom: 10px;
    border-radius: 3px;

    h1 {
        width: 95%;
        text-align: center;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
        padding-bottom: 10px;
    }

    h2 {
        width: 95%;
        font-size: 16px;
        font-weight: 700;
        padding: 0 10px;
    }

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: top;
        border-radius: 3px;
        margin-bottom: 10px;
    }

    .tagRow {
        display: flex;
        width: 95%;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
        margin-bottom: 10px;
    }

    .description {
        display: flex;
        padding: 0 10px 20px 10px;
        width: 95%;
        margin-top: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
`;

const Details: React.FC = () => {
    const { state, dispatch } = useContext(StoreContext);
    const gameId: { id?: string } = useParams();

    useEffect(() => {
        if (gameId.id) {
            dispatch(getGame(parseInt(gameId.id)));
        }
    }, [gameId.id, dispatch]);

    if (state.loading) {
        return <Loading />;
    }

    if (!state.game || !state.game.name || (gameId.id && isNaN(parseInt(gameId.id)))) {
        return <React.Fragment>Game could not be found</React.Fragment>;
    }

    return (
        <StyledDetails>
            <img src={state.game.background_image} alt={state.game.name} />
            <h1>{state.game.name}</h1>
            <h2>Genres</h2>
            <div className="tagRow">
                <Tags tags={state.game?.genres} tagKeys={["name"]} />
            </div>
            <h2>Platforms</h2>
            <div className="tagRow">
                <Tags tags={state.game?.platforms} tagKeys={["platform", "name"]} />
            </div>
            <h2>Description</h2>
            <div className="description">{state.game.description_raw}</div>
            <Button type="a" link={state.game.website} target="_blank" rel="noopener noreferrer">
                Visit The Games Website
            </Button>
        </StyledDetails>
    );
};

export default Details;
