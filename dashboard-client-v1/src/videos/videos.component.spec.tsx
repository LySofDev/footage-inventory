import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Videos } from './';

describe("Given a Videos component", () => {
  let component: ReactWrapper<Videos>;

  describe('When mounted without any props', () => {

    beforeEach(() => {
      component = mount(<Videos />);
    });

    it('renders successfully', () => {
      expect(component).toBeDefined();
    });

    it('contains the word Videos', () => {
      expect(component.contains('Videos')).toBe(true);
    });

  });

});
