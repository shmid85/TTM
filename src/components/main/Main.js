import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../../store/actions/categories-actions';
import { getAllItems } from '../../store/actions/items-actions';
import PropTypes from 'prop-types';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategories();
        this.props.getItems();
    }

    render() {
        return (
            <div>TTM application</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        items: state.items,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getAllCategories()),
        getItems: () => dispatch(getAllItems()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
    getCategories: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
};
