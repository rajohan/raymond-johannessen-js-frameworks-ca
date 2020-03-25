import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;
    margin-top: 20px;

    button {
        margin-top: 10px;
    }
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
