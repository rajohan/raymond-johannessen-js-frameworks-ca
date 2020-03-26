import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "../../../store";
import { updateFavorites } from "../../../store/actions";

const StyledLike = styled.div<{ isFavorite: boolean }>`
    color: ${props => (props.isFavorite ? props.theme.colors.like : props.theme.colors.secondary)};
    font-size: 20px;
    font-family: "Times New Roman", sans-serif;
    cursor: pointer;
    user-select: none;

    &:hover {
        transition: color 0.3s;
    }
`;

type Props = {
    gameId: number;
};

const Like: React.FC<Props> = ({ gameId }) => {
    const { state, dispatch } = useContext(StoreContext);

    const handleClick = () => {
        dispatch(updateFavorites(gameId));
    };

    return (
        <StyledLike onClick={handleClick} isFavorite={state.favorites.filter(game => game.id === gameId).length > 0}>
            &#x2764;
        </StyledLike>
    );
};

export default Like;
