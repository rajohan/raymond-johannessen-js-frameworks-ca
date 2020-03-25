import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};

    .logo {
        margin-left: 20px;
        font-weight: 700;
        color: ${props => props.theme.colors.text};
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.colors.linkHover};
        }
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Link className="logo" to="/">
                JavaScript Frameworks - CA
            </Link>
            <Navigation />
        </StyledHeader>
    );
};

export default Header;
