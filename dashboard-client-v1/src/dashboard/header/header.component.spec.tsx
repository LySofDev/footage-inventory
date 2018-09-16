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
      let state: any = component.state();
      expect(state.title).toEqual('Dashboard');
    });

  });
});
