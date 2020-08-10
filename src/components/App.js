import React, {Component} from 'react';
import json from '../mockData/categories.mock.json';

export class App extends Component {
    render() {
        console.log(json);

        return (
            <div>TTM application</div>
        )
    }
}
