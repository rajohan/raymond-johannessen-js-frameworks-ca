import React from "react";

type Props = {
    tag: string;
};

const Tag: React.FC<Props> = ({ tag }) => {
    return <li>{tag}</li>;
};

export default Tag;
