import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Header } from './';

describe('Given a Header component', () => {
  let component: ReactWrapper<Header>;

  describe('When mounted without props', () => {

    beforeEach(() => {
      component = mount(<Header />);
    });

    it('mounts successfully', () => {
      expect(component).toBeDefined();
    });

    it('contains the word Dashboard', () => {
      const state: any = component.state();
      expect(state.title).toEqual('Dashboard');
    });

  });

  describe('When mounted with a title prop', () => {

    it('contains the title', () => {
      const testTitle = "Hello, Title!";
      component = mount(<Header title={testTitle} />);
      expect(component.contains(testTitle)).toBe(true);
    });

  });
});
