import React from 'react';
import "./css/TagsContainer.css"

const TagsContainer = (props: {tags: string[]}) => {
    return (
        <div className="tags">
            {props.tags.map(t =>
                <div className="tag">{t}</div>
            )}
        </div>
    );
};

export default TagsContainer;