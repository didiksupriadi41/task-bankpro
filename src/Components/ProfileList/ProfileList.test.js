import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ProfileList from './ProfileList';

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

it("Testing ProfileList component", () => {
    act(() => {
        render(<ProfileList />, container);
    });
    expect(container.textContent).toBe("");


    act(() => {
        render(<ProfileList category="No Rekening"/>, container);
    });
    expect(container.textContent).toBe("No Rekening");

    act(() => {
        render(<ProfileList data="13517126"/>, container);
    });
    expect(container.textContent).toBe("13517126");

    act(() => {
        render(<ProfileList category="saldo" data="1000000"/>, container);
    });
    expect(container.textContent).toBe("saldo1000000");
});