import React, {FC} from 'react';
import "./css/TagsContainer.css"
import Btn from "./Btn";

interface ITags {
    tags: string[],
    del?: boolean,
    onDelete?: (val: number) => void,
}

const TagsContainer: FC<ITags> = ({tags, onDelete=undefined}) => {
    return (
        <div className="tags">
            {tags.map((t,i) =>
                <div className="tag">
                    <>
                        {t}
                        {onDelete !== undefined
                            && <Btn text={"del"} onClick={() => {
                                onDelete(i)
                        }}/>
                        }
                    </>
                </div>
            )}
        </div>
    );
};

export default TagsContainer;