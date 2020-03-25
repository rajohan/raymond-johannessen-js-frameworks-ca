import React from "react";
import Label from "../Label";

type Props = {
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};

const Input: React.FC<Props> = props => {
    const { id = "", name, type = "text", placeholder, label, value, onChange, onBlur } = props;

    const input =
        type === "textarea" ? (
            <textarea id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
        ) : (
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        );

    if (label) {
        return (
            <React.Fragment>
                <Label htmlFor={id}>{label}</Label>
                {input}
            </React.Fragment>
        );
    }

    return input;
};

export default Input;
