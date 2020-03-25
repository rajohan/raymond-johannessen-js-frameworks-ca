import React from "react";
import { Link } from "react-router-dom";

type Props = {
    link?: string;
    type?: "Link" | "link" | "a" | "button";
    target?: string;
    rel?: string;
    onClick?: () => void;
};

const Button: React.FC<Props> = props => {
    const { link = "", type = "link", children, target, rel, onClick } = props;

    if (type === "a") {
        return (
            <a href={link} target={target} rel={rel}>
                {children}
            </a>
        );
    } else if (type === "button") {
        return <button onClick={onClick}>{children}</button>;
    } else {
        return <Link to={link}>{children}</Link>;
    }
};

export default Button;
