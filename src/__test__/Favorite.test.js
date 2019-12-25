import React from 'react'
import ReactDOM from "react-dom"
import Favorite from "../components/DetailMovies/Favorite"
import { render } from '@testing-library/react'
import "@testing-library/jest-dom"
import TestUtils from 'react-dom/test-utils'
// import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import expect from 'expect'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('Favorite Test', () => {

    it("renders without crashing `.item-details-header-info-container-content__favorite wow pulse`", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Favorite></Favorite>, div)
    })
    it("renders correcly class", () => {
        const wrapper = shallow(<Favorite />);
        expect(wrapper.find('.item-details-header-info-container-content__favorite__ok wow pulse')).toHaveLength(1);
    })


})
