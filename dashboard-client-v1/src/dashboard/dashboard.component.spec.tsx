import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { Dashboard } from './';

describe('Given a Dashboard Component', () => {
  let fixture: ReactWrapper;

  describe('When mounted without props', () => {

    it('will mount successfully', () => {
      fixture = mount(<Dashboard />);
      expect(fixture).toBeDefined();
    });

  });
  
});
