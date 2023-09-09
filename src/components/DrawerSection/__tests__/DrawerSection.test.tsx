import { DrawerSection } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../';

describe('DrawerSection', () => {

	test('should forward title prop as subheader', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<DrawerSection title="Item 1" />
			</BlueBaseApp>
		);

		await waitForElement(component, DrawerSection);
		expect(component.find('DrawerSection Text').last().text()).toBe('Item 1');
	});

});
