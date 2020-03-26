import React, { useContext, useEffect, useState } from "react";
import Input from "../Shared/Form/Input";
import styled from "styled-components";
import { StoreContext } from "../../store";
import { getGames, searchGames } from "../../store/actions";

const StyledSearch = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 20px 0;
`;

const Search: React.FC = () => {
    const { dispatch } = useContext(StoreContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchTouched, setSearchTouched] = useState(false);

    // Perform search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery.length > 0) {
                dispatch(searchGames(searchQuery));
            } else {
                searchTouched && dispatch(getGames());
            }
        }, 800);

        return () => {
            clearTimeout(timer);
        };
    }, [dispatch, searchTouched, searchQuery]);

    // Reset games state when leaving component if a search has been performed
    useEffect(() => {
        return () => {
            searchTouched && dispatch(getGames());
        };
    }, [searchTouched, dispatch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setSearchQuery(event.target.value);
        setSearchTouched(true);
    };

    return (
        <StyledSearch>
            <Input id="search" placeholder="Search..." value={searchQuery} onChange={handleChange} />
        </StyledSearch>
    );
};

export default Search;
