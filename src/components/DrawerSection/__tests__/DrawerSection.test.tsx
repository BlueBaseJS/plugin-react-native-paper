import { DrawerSection } from '@bluebase/components';
import React from 'react';
import { shallow } from 'enzyme';

describe('DrawerSection', () => {

	test('should forward title prop as subheader', () => {
		const component = shallow(
			<DrawerSection title="Item 1" />
		);
		expect(component.props().title).toBe('Item 1');
	});


});
