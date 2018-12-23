import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Successfully renders', () => {
    shallow(<GuessForm />);
  });

  it('Fires onMakeGuess callback on form submit', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    // mount renders full DOM rather than just one element with shallow
    const value = 10;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('Resets input on form submit', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});