import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { getGame } from "../../store/actions";
import { StoreContext } from "../../store";
import Breadcrumb from "../Shared/Breadcrumb";
import Tags from "../Shared/Tags";
import Button from "../Shared/Form/Button";
import Loading from "../Shared/Loading";
import Like from "../Shared/Like";

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.tertiary};
    padding-bottom: 10px;
    border-radius: 3px;

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

    .detailsHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        border-bottom: 1px solid ${props => props.theme.colors.primary};

        h1 {
            text-align: center;
        }
    }

    .detailsTagRow {
        display: flex;
        width: 95%;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
        margin-bottom: 10px;
    }

    .detailsDescription {
        display: flex;
        flex-direction: column;
        padding: 0 10px 20px 10px;
        width: 95%;
        margin-top: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
`;

const DetailsError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        font-weight: bold;

        &:hover {
            color: ${props => props.theme.colors.secondary};
        }
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
        return (
            <DetailsError>
                <p>Sorry the game your are requesting could not be found.</p>
                <Link to="/">Go back to the home page</Link>
            </DetailsError>
        );
    }

    return (
        <React.Fragment>
            <Breadcrumb paths={[{ to: "/", text: "Home" }]} width={800} append={state.game.name} />
            <StyledDetails>
                <img src={state.game.background_image} alt={state.game.name} />
                <div className="detailsHeader">
                    <h1>{state.game.name}</h1>
                    <Like gameId={state.game.id} />
                </div>
                <h2>Genres</h2>
                <div className="detailsTagRow">
                    <Tags tags={state.game?.genres} tagKeys={["name"]} />
                </div>
                <h2>Platforms</h2>
                <div className="detailsTagRow">
                    <Tags tags={state.game?.platforms} tagKeys={["platform", "name"]} />
                </div>
                <h2>Description</h2>
                <div className="detailsDescription" dangerouslySetInnerHTML={{ __html: state.game?.description }} />
                <Button type="a" link={state.game.website} target="_blank" rel="noopener noreferrer">
                    Visit The Games Website
                </Button>
            </StyledDetails>
        </React.Fragment>
    );
};

export default Details;
