import React from "react";
import Input from "../Shared/Form/Input";
import styled from "styled-components";

const StyledSearch = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 20px 0;
`;

const Search: React.FC = () => {
    return (
        <StyledSearch>
            <Input id="search" placeholder="Search..." />
        </StyledSearch>
    );
};

export default Search;
