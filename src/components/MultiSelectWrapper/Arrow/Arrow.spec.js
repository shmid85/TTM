import React from "react";
import {beforeEach, describe, expect, it, jest} from "@jest/globals";
import Arrow from "./Arrow";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure } from 'enzyme';

describe('Arrow component', () => {
    let componentWrapper;
    configure({adapter: new Adapter()});

    beforeEach(()=>{
        componentWrapper = shallow(<Arrow action={()=>{}} type={'left'}/>);
    });

    it('should render the component', () => {
        expect(componentWrapper.length).toEqual(1);
    });

    it('should render the left arrow', () => {
        expect(componentWrapper.text()).toEqual('◄');
    });

    it('should render the right arrow', () => {
        componentWrapper = shallow(<Arrow action={()=>{}} type={'right'}/>);

        expect(componentWrapper.text()).toEqual('►');
    });

    it('should not render the component without type', () => {
        componentWrapper = shallow(<Arrow action={()=>{}} type={''}/>);

        expect(componentWrapper.length).toEqual(1);
    });

    it('should call action on arrow click', () => {
        const mockFn = jest.fn();
        componentWrapper = shallow(<Arrow action={mockFn} type={'right'}/>);

        componentWrapper.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
});

