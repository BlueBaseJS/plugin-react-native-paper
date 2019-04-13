import { Menu } from '../Menu.component';
import { MenuItem } from '../MenuItem.component';
import React from 'react';
import { shallow } from 'enzyme';


test('Menu component should use children prop to show content', () => {
	const component = shallow(
    <Menu>
      <MenuItem title="MenuItem" />
    </Menu>
  );
	expect(component.childAt(0).props().title).toBe('MenuItem');

});
