import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { SideBar } from './';

describe('Given a SideBar component', () => {
  let component: ReactWrapper<SideBar>;

  describe('When mounted without props', () => {

    beforeEach(() => {
      component = mount(<SideBar />);
    });

    it('mounts successfully', () => {
      expect(component).toBeDefined();
    });

  });
});
