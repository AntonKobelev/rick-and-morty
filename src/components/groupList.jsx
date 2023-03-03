import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, filter, onChangeFilter }) => {
    return (
        <div className="list-group">
            {items.map((item) => (
                <button
                    className={
                        "list-group-item list-group-item-action" +
                        (item === filter ? " active" : "")
                    }
                    key={item}
                >
                    {item.text}
                </button>
            ))}
        </div>
    );
};

GroupList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
};

export default GroupList;
