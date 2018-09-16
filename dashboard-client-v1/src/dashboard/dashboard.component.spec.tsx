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

  describe('When mounted with children', () => {

    it('will render the children within the layout', () => {
      fixture = mount(
        <Dashboard>
          <h1>Child 1</h1>
          <h1>Child 2</h1>
        </Dashboard>
      );
      expect(fixture.find('h1').length).toEqual(2);
    });

  });

  describe('When mounted with a title prop', () => {

    it('will show the title in the header', () => {
      const testTitle = "Hello, Title!";
      fixture = mount(<Dashboard title={testTitle} />);
      expect(fixture.contains(testTitle)).toBe(true);
    });

  });

});
