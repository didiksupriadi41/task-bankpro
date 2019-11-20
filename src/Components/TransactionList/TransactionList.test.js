import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TransactionList from './TransactionList';

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

it("Testing TransactionList component", () => {
    act(() => {
        render(<TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>, container);
    });
    expect(container.textContent).toBe("19-10-2019 17:04:29debit30000001234567");
});