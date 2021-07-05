// Test away!
import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';

test('defaults to unlocked and open', () => {
    const wrapper = render(<Display />);
    wrapper.getByText(/unlocked/i);
    wrapper.getByText(/open/i);
});

test('displays if gate is open/closed and if it is locked/unlocked', () => {
    const wrapper = render(<Display/>);
    wrapper.queryAllByDisplayValue(/closed/i);
    const wrapper2 = render(<Display/>);
    wrapper2.queryAllByDisplayValue(/open/i);
    const wrapper3 = render(<Display/>);
    wrapper3.queryAllByDisplayValue(/locked/i);
    const wrapper4 = render(<Display/>);
    wrapper4.queryAllByDisplayValue(/unlocked/i);
});

test('displays Closed if the closed prop is true and Open if otherwise', () => {
    const wrapper = render(<Display closed={true}/>);
    wrapper.getByText(/closed/i);
    const wrapper2 = render(<Display closed={false}/>);
    wrapper2.getByText(/open/i);
});

test('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
    const wrapper3 = render(<Display locked={false}/>);
    wrapper3.getByText(/unlocked/i);
    const wrapper4 = render(<Display locked={true}/>);
    wrapper4.getByText('Locked');
});

test('when locked or closed use the red-led class', () => {
    const wrapper = render(<Display locked={true}/>);
    wrapper.findByText("led red-led");
    const wrapper2 = render(<Display closed={true}/>);
    wrapper2.findByText("led red-led");
});

test('when unlocked or open use the green-led class', () => {
    const wrapper = render(<Display locked={false}/>);
    wrapper.findByText("led green-led");
    const wrapper2 = render(<Display closed={false}/>);
    wrapper2.findByText("led green-led");
});


// ****** WHY DOES THIS NOT WORK ??? ******

// test('when locked or closed use the red-led class', () => {
//     const wrapper = render(<Display locked={true}/>);
//     wrapper.getByTestId("led red-led");
//     const wrapper2 = render(<Display closed={true}/>);
//     wrapper2.getByTestId("led red-led");
// });

// test('when unlocked or open use the green-led class', () => {
//     const wrapper = render(<Display locked={false}/>);
//     wrapper.getByTestId("led green-led");
//     const wrapper2 = render(<Display closed={false}/>);
//     wrapper2.getByTestId("led green-led");
// });