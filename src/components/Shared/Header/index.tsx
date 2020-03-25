import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};

    div {
        margin-left: 20px;
        font-weight: 700;
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <div>JavaScript Frameworks - CA</div>
            <Navigation />
        </StyledHeader>
    );
};

export default Header;
