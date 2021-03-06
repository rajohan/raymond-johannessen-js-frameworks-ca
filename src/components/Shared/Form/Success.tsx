import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledSuccess = styled.div`
    background-color: ${(props): string => props.theme.colors.success};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 13px;
    width: 100%;
    text-align: center;
`;

const Success: React.FC = ({ children }: PropsWithChildren<{}>): React.ReactElement => {
    return <StyledSuccess>{children}</StyledSuccess>;
};

export default Success;
