import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import  Title from './Title';
import { isTSAnyKeyword, isTSBigIntKeyword, exportAllDeclaration } from '@babel/types';

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

it("Testing Title component", () => {
    act(() => {
        render(<Title />, container);
    });
    expect(container.textContent).toBe("");

    act(() => {
        render(<Title title="Home"/>, container);
    });
    expect(container.textContent).toBe("Home");

    act(() => {
        render(<Title title="Transfer"/>, container);
    });
    expect(container.textContent).toBe("Transfer");

    act(() => {
        render(<Title title="Transaction"/>, container);
    });
    expect(container.textContent).toBe("Transaction");
});