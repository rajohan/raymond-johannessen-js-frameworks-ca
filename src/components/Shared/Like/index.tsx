import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "../../../store";
import { updateFavorites } from "../../../store/actions";

const StyledLike = styled.div<{ isFavorite: boolean }>`
    svg {
        display: block;
        fill: ${props => (props.isFavorite ? props.theme.colors.like : props.theme.colors.secondary)};
        cursor: pointer;
        user-select: none;
        width: 18px;
        height: 18px;
    }

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
            {/* https://iconmonstr.com/favorite-5-svg/ */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"/>
            </svg>
        </StyledLike>

    );
};

export default Like;
