import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Successfully renders', () => {
    shallow(<GuessCount />);
  });

  it('Renders correct guess count', () => {
    const value = 5;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
});