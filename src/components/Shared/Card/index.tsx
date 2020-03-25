import React from "react";

import { Game } from "../../../store/types";
import Button from "../Form/Button";

type Props = {
    game: Game;
};

const Card: React.FC<Props> = ({ game }) => {
    return (
        <div>
            <h1>{game.name}</h1>
            <div>{game.background_image}</div>
            <div>{game.rating}</div>
            <div>{game.released}</div>
            <Button link={`game/${game.id}`}>See more</Button>
        </div>
    );
};

export default Card;
