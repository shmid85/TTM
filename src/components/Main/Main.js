import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    addCategory,
    deleteCategory,
    getAllCategories,
    updateCategory
} from '../../store/actions/categories-actions';
import {
    addItem,
    deleteItem,
    deleteItemsByParentId,
    getAllItems,
    getItemsByParentId,
    updateItem
} from '../../store/actions/items-actions';
import Select from '../Select/Select';
import MultiSelectWrapper from "../MultiSelectWrapper/MultiSelectWrapper";
import PropTypes from 'prop-types';
import {logUserAction} from "../../store/actions/user-actions";

class Main extends Component {
    constructor(props) {
        super(props);

        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        this.props.getCategories();
    }

    changeCategory(parentId) {
        this.props.getItemsByParentId(parentId);
    }

    render() {
        return (
            <div onClick={this.props.logUserAction} onChange={this.props.logUserAction}>
                <div className="header">
                    <h1>TTM application</h1>
                </div>
                <main>
                    <div className='select-wrapper'>
                        <Select
                            categories={this.props.categories}
                            changeCategory={this.changeCategory}
                        />
                    </div>
                    <div className='multi-select-wrapper'>
                        <MultiSelectWrapper items={this.props.items}/>
                    </div>
                </main>
            </div>
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
        deleteItem: (id) => dispatch(deleteItem(id)),
        deleteCategory: (id) => dispatch(deleteCategory(id)),
        deleteItemsByParentId: (id) => dispatch(deleteItemsByParentId(id)),
        addCategory: (name, flags) => dispatch(addCategory(name, flags)),
        addItem: (name, parentId, flags) => dispatch(addItem(name, parentId, flags)),
        updateCategory: (id, name, flags) => dispatch(updateCategory(id, name, flags)),
        updateItem: (id, name, flags) => dispatch(updateItem(id, name, flags)),
        getItemsByParentId: (parentId) => dispatch(getItemsByParentId(parentId)),
        logUserAction: (event) => dispatch(logUserAction(event)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

Main.propTypes = {
    getCategories: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
};
