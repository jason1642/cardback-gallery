import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { render } from '@testing-library/react';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div></div>, div);
});

it('renders header correctly', () => {
  const { getByTestId } = render(<Header></Header>);
  expect(getByTestId('header')).toHaveTextContent('header123');
});
