import React, { Component, PureComponent  } from 'react';
import Option from '../Option/Option';
import PropTypes from "prop-types";

export default class Select extends PureComponent {
    constructor(props) {
        super(props);

        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.categories && this.props.categories.length) {

            this.props.changeCategory(this.props.categories[0].id);
        }
    }

    changeCategory (event) {
        this.props.changeCategory(event.target.value);
    };

    render() {
        if (this.props.categories && this.props.categories.length) {
            const categories = this.props.categories.map(category =>
                <Option key={category.id} id={category.id} name={category.name} flags={category.flags}/>
            );

            return <select id="category" onChange={this.changeCategory}>{categories}</select>
        } else {
            return <div>No categories</div>
        }
    }
}

Select.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            flags: PropTypes.string,
        })
    ),
    changeCategory: PropTypes.func.isRequired,
};
