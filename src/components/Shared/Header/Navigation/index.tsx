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

        &:hover {
            background-color: ${props => props.theme.colors.tertiary};
        }

        &.active {
            color: ${props => props.theme.colors.linkActive};
        }
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
