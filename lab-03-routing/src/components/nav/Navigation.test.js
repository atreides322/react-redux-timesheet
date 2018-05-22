import React from 'react';
import Navigation from './Navigation';
import {mount} from 'enzyme';

import {BrowserRouter} from 'react-router-dom';

describe('Navigation Component: ', () => {
  let nav;

  beforeEach(() => {
    nav = mount(
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    );
  });

  it('implement me', () => {
    expect(true).toBe(true);
  });

  it('should instantiate the Navigation Component', () => {
    expect(nav).toHaveLength(1);
  });
});
