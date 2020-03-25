import React from "react";
import Input from "../Shared/Form/Input";
import styled from "styled-components";

const StyledSearch = styled.div`
    display: flex;
    flex-direction: column;
`;

const Search: React.FC = () => {
    return (
        <StyledSearch>
            <Input placeholder="Search..." label="Search" />
        </StyledSearch>
    );
};

export default Search;
