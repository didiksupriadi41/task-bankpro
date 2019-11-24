import React from 'react';
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from 'react-dom';
import Navbar from './Navbar';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar />, div);
    ReactDOM.unmountComponentAtNode(div);
})

