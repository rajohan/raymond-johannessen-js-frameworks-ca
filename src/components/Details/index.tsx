import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getGame } from "../../store/actions";
import { StoreContext } from "../../store";
import Tag from "../Shared/Tag";
import Button from "../Shared/Form/Button";

const Details: React.FC = () => {
    const { state, dispatch } = useContext(StoreContext);
    const gameId: { id?: string } = useParams();

    useEffect(() => {
        if (gameId.id) {
            dispatch(getGame(parseInt(gameId.id)));
        }
    }, [gameId.id, dispatch]);

    const renderGenres = () => {
        return state.game && state.game.genres.map((genre, index) => <Tag key={`genre-${index}`} tag={genre.name} />);
    };

    const renderPlatforms = () => {
        return (
            state.game &&
            state.game.platforms.map((platform, index) => (
                <Tag key={`platform-${index}`} tag={platform.platform.name} />
            ))
        );
    };

    if (state.loading) {
        return <React.Fragment>Loading...</React.Fragment>;
    }

    if (!state.game || !state.game.name || (gameId.id && isNaN(parseInt(gameId.id)))) {
        return <React.Fragment>Game could not be found</React.Fragment>;
    }

    return (
        <div>
            <h1>{state.game.name}</h1>
            <ul>{renderGenres()}</ul>
            <ul>{renderPlatforms()}</ul>
            <div>{state.game.background_image}</div>
            <div>{state.game.description_raw}</div>
            <Button type="a" link={state.game.website} target="_blank" rel="noopener noreferrer">
                Visit The Games Website
            </Button>
        </div>
    );
};

export default Details;
