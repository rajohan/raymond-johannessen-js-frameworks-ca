import React from "react";
import styled from "styled-components";

const StyledTag = styled.li`
    background-color: ${props => props.theme.colors.secondary};
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 700;
`;

type Props = {
    tag: string;
};

const Tag: React.FC<Props> = ({ tag }) => {
    return <StyledTag>{tag}</StyledTag>;
};

export default Tag;
