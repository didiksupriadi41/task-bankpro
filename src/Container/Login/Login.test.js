import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

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
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders', () => {
    var output = 
    '<div class="login">'
    + '<div class="logo">'
    + '<img src="logo.png" alt="logo"/>'
    + '</div>'
    + '<div class="login-box">'
    + '<form>'
    + '<div class="no-rekening">'
    + '<input type="text" placeholder="No Rekening" class="login-no-rekening"/>'
    + '</div>'
    + '<button class="login-button">&gt;</button>'
    + '</form>'
    + '</div>'
    + '</div>';

    const wrapper = shallow(<Login />);
    expect(wrapper.html()).toEqual(output);
})