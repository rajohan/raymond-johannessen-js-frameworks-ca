import React from "react";
import styled from "styled-components";

type Props = {
    htmlFor: string;
};

const StyledLabel = styled.label`
    font-size: 16px;
    margin-left: 3px;
`;

const Label: React.FC<Props> = ({ htmlFor, children }) => {
    return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
