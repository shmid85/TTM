import React from "react";
import PropTypes from "prop-types";

export default function Arrow(props) {
    switch (props.type) {
        case 'left':
            return <span className="arrow" onClick={props.action}>&#9668;</span>;
        case 'right':
            return <span className="arrow" onClick={props.action}>&#9658;</span>;
        default:
            return;
    }
}

Arrow.propTypes = {
    action: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};
