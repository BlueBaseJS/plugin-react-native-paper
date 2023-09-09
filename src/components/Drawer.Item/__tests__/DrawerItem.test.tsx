import { shallow } from 'enzyme';
import React from 'react';

import { DrawerItem } from '../DrawerItem';

describe('DrawerItem', () => {
	test('should forward title prop as label', () => {
		const DrawerItemTemp = DrawerItem as any;

		const component = shallow(<DrawerItemTemp title="Item 1" />);
		// expect(component).toMatchSnapshot();
		expect(component.props().label).toBe('Item 1');
	});

	test('should forward icon.name prop as icon', () => {
		const DrawerItemTemp = DrawerItem as any;

		const component = shallow(
			<DrawerItemTemp title="Item 1" icon={{ name: 'add-a-photo', size: 8, color: 'primary' }} />
		);
		expect(component).toMatchSnapshot();
		expect(component.props().label).toBe('Item 1');
	});
});
