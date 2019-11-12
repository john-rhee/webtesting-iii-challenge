// Test away!
import React from 'react';
import Controls from './Controls';
import { render, fireEvent } from '@testing-library/react';

test('App renders correctly',() =>{
    expect(render(<Controls/>)).toMatchSnapshot();
   });

test('cannot be closed or opened if it is locked', () => {
  const wrapper = render(<Controls closed={true} locked={true}/>);
  const disabledButton = wrapper.queryByText(/open gate/i);
  expect(disabledButton).toHaveProperty('disabled');
});

test('Provides buttons to toggle closed/locked', () => {
    const wrapper = render(<Controls />);
    wrapper.queryByTestId('toggle-btn')
})

test('buttons text changes to reflect the state the door will be in if clicked', () => {
    const wrapper = render(<Controls closed={false} locked={false}/>);
    const gateButton = wrapper.queryByText('Close Gate');
    fireEvent.click(gateButton);
    expect(wrapper.queryByText('Open Gate'))
  });

test('the closed toggle button is disabled if the gate is locked', () => {
    const wrapper = render(<Controls locked={true} closed={true}/>);
    const disabledClosed = wrapper.queryByText(/open gate/i);
    expect(disabledClosed).toHaveProperty('disabled');
  });

test('the locked toggle button is disabled if the gate is open', () => {
    const wrapper = render(<Controls closed={false} locked={false}/>);
    const disabledLock = wrapper.queryByText(/lock gate/i);
    expect(disabledLock).toHaveProperty('disabled');
  });