import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

type Props = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<Props> = ({ onSubmit, children }) => {
    return (
        <StyledForm onSubmit={onSubmit} method="POST" noValidate={true}>
            {children}
        </StyledForm>
    );
};

export default Form;
