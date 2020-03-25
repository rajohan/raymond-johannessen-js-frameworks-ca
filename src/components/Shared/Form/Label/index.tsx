import React from "react";

type Props = {
    htmlFor: string;
};

const Label: React.FC<Props> = ({ htmlFor, children }) => {
    return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
