// Test away
import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

test('App renders correctly',() =>{
 expect(render(<Dashboard/>)).toMatchSnapshot();
});

test('shows the controls and display', () => {
    const wrapper = render(<Dashboard/>);
    wrapper.queryByText(/controls/i);
    wrapper.queryByText(/display/i);
  });
