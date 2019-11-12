// Test away!
import React from 'react';
import Controls from './Controls';
import { render } from '@testing-library/react';

test('App renders correctly',() =>{
    expect(render(<Controls/>)).toMatchSnapshot();
   });

test('cannot be closed or opened if it is locked', () => {
  const wrapper = render(<Controls closed={true} locked={true}/>);
  const disabledButton = wrapper.queryByText(/open gate/i);
  expect(disabledButton).toHaveProperty('disabled');
});