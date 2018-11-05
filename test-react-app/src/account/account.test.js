import React from 'react';
import { shallow } from 'enzyme';
import Account from './account';

describe('<Account />', () => {
  test('renders', () => {
    const wrapper = shallow(<Account />);
    expect(wrapper).toMatchSnapshot();
  });
});
