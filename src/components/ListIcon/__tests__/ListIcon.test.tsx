import { BlueBaseApp } from '@bluebase/core';
import { ListIcon } from '../ListIcon';
import Plugin from '../../../';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('ListIcon', () => {

	test('should forward title prop as primary', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<ListIcon name="inbox" />
			</BlueBaseApp>
		);

		await waitForElement(component, ListIcon);

		expect(component.find('Icon').first().prop('name')).toBe('inbox');
	});

});
