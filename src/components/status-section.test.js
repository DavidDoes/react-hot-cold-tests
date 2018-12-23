import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Renders successfully', () => {
    shallow(<StatusSection auralStatus="" guesses={[]} />);
  });
});