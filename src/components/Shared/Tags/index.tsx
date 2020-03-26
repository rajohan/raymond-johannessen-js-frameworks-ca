import React from "react";
import styled from "styled-components";

import Tag from "./Tag";

const StyledTags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
`;

type Props = {
    tags: any[];
    tagKeys: string[];
};

const Tags: React.FC<Props> = ({ tags, tagKeys }) => {
    const renderTags = () => {
        return tags.map(tag => {
            let key: string = "";

            // Loop through tagKeys in the tags array to extract the tag
            for (let i: number = 0; i < tagKeys.length; i++) {
                key = i === 0 ? tag[tagKeys[i] as any] : key[tagKeys[i] as any];
            }

            return <Tag key={`tag-${key}`} tag={key} />;
        });
    };

    return <StyledTags>{renderTags()}</StyledTags>;
};

export default Tags;
