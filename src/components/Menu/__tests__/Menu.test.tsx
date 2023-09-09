import { shallow } from 'enzyme';
import React from 'react';

import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';

test('Menu component should use children prop to show content', () => {
	const component = shallow(
		<Menu>
			<MenuItem title="MenuItem" />
		</Menu>
	);
	expect(component.childAt(0).props().title).toBe('MenuItem');
});

test('Menu component should use children prop to show content', () => {
	const component = shallow(<MenuItem title="MenuItem" />);
	expect(component.props().title).toBe('MenuItem');
});
