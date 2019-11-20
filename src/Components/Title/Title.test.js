import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import  Title from './Title';
// import { isTSAnyKeyword, isTSBigIntKeyword, exportAllDeclaration } from '@babel/types';

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
        render(<Title title="Welcom"/>, container);
    });
    expect(container.textContent).toBe("Welcom");

    act(() => {
        render(<Title title="Transfer"/>, container);
    });
    expect(container.textContent).toBe("Transfer");

    act(() => {
        render(<Title title="Riwayat Transaksi"/>, container);
    });
    expect(container.textContent).toBe("Riwayat Transaksi");
});