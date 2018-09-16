import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Clips } from './';

describe("Given a Clips component", () => {
  let component: ReactWrapper<Clips>;

  describe('When mounted without any props', () => {

    beforeEach(() => {
      component = mount(<Clips />);
    });

    it('renders successfully', () => {
      expect(component).toBeDefined();
    });

    it('contains the word Clips', () => {
      expect(component.contains('Clips')).toBe(true);
    });

  });

});
