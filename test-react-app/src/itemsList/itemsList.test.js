import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from './itemsList';

describe('<ItemsList />', () => {
  test('renders', () => {
    const wrapper = shallow(<ItemsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
