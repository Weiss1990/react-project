import React from 'react';
import { shallow } from 'enzyme';
import MyForm from './myForm';

describe('<MyForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<MyForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
