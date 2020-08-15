import React, {Component} from 'react';
import PropTypes from "prop-types";
import Pagination from './Pagination/Pagination';
import MultiSelect from './MultiSelect/MultiSelect';

export default class MultiSelectWrapper extends Component {
    constructor(props) {
        super(props);

        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.mapVisibleItems = this.mapVisibleItems.bind(this);
        this.inputText = this.inputText.bind(this);

        this.state = {
            currentPage: 1,
            userInput: '',
        };
    }

    slideLeft() {
        if (this.state.currentPage > 1) {
            this.setState((state) => {
                return {currentPage: this.state.currentPage - 1}
            });
        }
    };

    slideRight(totalPagesCount) {
        if (this.state.currentPage + 1 <= totalPagesCount) {
            this.setState((state) => {
                return {currentPage: this.state.currentPage + 1}
            });
        }
    };

    mapVisibleItems(items, currentPage = 1) {
        let filteredItems = [];
        let totalPagesCount;
        const currentText = this.state.userInput;

        if (currentText) {
            const filteredItemsByText = items.filter(
                item => item.name.toLocaleLowerCase().includes(currentText.toLocaleLowerCase())
            );

            totalPagesCount = Math.ceil((filteredItemsByText.length) / 2);
            filteredItems = filteredItemsByText.slice((currentPage - 1) * 2, (currentPage - 1) * 2 + 2);
        }

        return {
            filteredItems,
            totalPagesCount,
        };
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevProps.items &&
            prevProps.items.length &&
            this.props.items &&
            this.props.items.length &&
            prevProps.items[0].id !== this.props.items[0].id
        ) {
            this.setState({
                currentPage: 1,
                userInput: '',
            });
        }
    }

    inputText(event) {
        const text = event.target.value;

        this.setState({
            userInput: text,
            currentPage: 1
        })
    }

    render() {
        if (this.props.items && this.props.items.length) {
            const {filteredItems, totalPagesCount} =  this.mapVisibleItems(this.props.items, this.state.currentPage);

            return (
                <div className="multi-select">
                    <input value={this.state.userInput} type="text" list="items" onChange={this.inputText}/>
                    {this.state.userInput && filteredItems.length > 0 &&
                    <div className="multi-select-items">
                        <MultiSelect visibleItems={filteredItems}/>
                        {
                            totalPagesCount > 1 &&
                            <Pagination
                                currentPage={this.state.currentPage}
                                slideLeft={this.slideLeft}
                                slideRight={this.slideRight}
                                totalPagesCount={totalPagesCount}
                            />
                        }
                    </div>
                    }
                </div>
            )
        } else {
            return <div>No items</div>
        }
    }
}

MultiSelectWrapper.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            parentId: PropTypes.parentId,
            name: PropTypes.string,
            flags: PropTypes.string,
        })
    ),
};
