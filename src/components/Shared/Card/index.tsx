import React from "react";
import Rate from "rc-rate";
import styled from "styled-components";
import "../../../assets/rc-rate/rc-rate.css";

import { Game } from "../../../store/types";
import Button from "../Form/Button";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.tertiary};
    padding-bottom: 10px;
    border-radius: 3px;

    h1 {
        font-size: 16px;
        padding: 10px 0 20px 0;
        width: 90%;
        margin-bottom: 0;
        text-align: center;
        border-bottom: 1px solid ${props => props.theme.colors.primary};

        a {
            color: ${props => props.theme.colors.link};
            text-decoration: none;

            &:hover {
                color: ${props => props.theme.colors.secondaryLight};
            }
        }
    }

    .details {
        display: flex;
        flex-direction: column;
        width: 90%;
        font-size: 13px;
        flex: 1;

        padding: 0 0 10px 0;
        margin-bottom: 10px;

        &__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid ${props => props.theme.colors.primary};
            padding: 10px 2px;
        }
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        object-position: top;
    }
`;

const StyledRate = styled(Rate)`
    &.rc-rate {
        font-size: 20px;
    }

    li {
        margin-right: 2px;
        color: #000;
    }

    li div {
        outline: none;
    }
`;

type Props = {
    game: Game;
};

const Card: React.FC<Props> = ({ game }) => {
    const date = new Date(game.released).toLocaleDateString("en-GB");

    return (
        <StyledCard>
            <img src={game.background_image} alt={game.name} />
            <h1>
                <Link to={`game/${game.id}`}>{game.name}</Link>
            </h1>
            <div className="details">
                <div className="details__item">
                    <div>Release Date:</div>
                    <div>{date}</div>
                </div>
                <div className="details__item">
                    <div>Rating:</div>
                    <StyledRate defaultValue={game.rating} allowHalf={true} disabled={true} />
                </div>
            </div>
            <Button link={`game/${game.id}`}>See More</Button>
        </StyledCard>
    );
};

export default Card;
