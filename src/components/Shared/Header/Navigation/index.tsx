import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
    ul {
        display: flex;
        margin: 0;
        list-style: none;
    }

    a {
        display: block;
        padding: 15px 20px;
        color: ${props => props.theme.colors.link};
        text-decoration: none;

        &:hover,
        &.active {
            background-color: ${props => props.theme.colors.primary};
            transition: background-color 0.3s;
        }
    }

    li:not(:last-of-type) {
        border-right: 1px solid ${props => props.theme.colors.tertiary};
    }

    li:first-of-type {
        border-left: 1px solid ${props => props.theme.colors.tertiary};
    }
`;

const Navigation: React.FC = () => {
    return (
        <StyledNavigation>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favorites" activeClassName="active">
                        Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </StyledNavigation>
    );
};

export default Navigation;
