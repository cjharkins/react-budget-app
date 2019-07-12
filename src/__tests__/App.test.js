import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';
import AppRouter from '../routers/AppRouter';

test('renders <App /> correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(AppRouter)).toBeDefined;
});
