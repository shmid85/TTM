import React from 'react';
import PropTypes from "prop-types";
import Arrow from '../Arrow/Arrow';

export default function Pagination(props) {
    function slideRight() {
        props.slideRight(props.totalPagesCount);
    }

    return (
        <div className="pagination">
            <Arrow action={props.slideLeft} type={'left'}/>
            <span>{props.currentPage}</span>
            <Arrow action={slideRight} type={'right'}/>
        </div>
    );
}

Pagination.propType = {
    slideLeft: PropTypes.func.isRequired,
    slideRight: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPagesCount: PropTypes.number.isRequired,
};
