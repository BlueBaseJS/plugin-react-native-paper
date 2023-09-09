import { List, ListItem } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

describe('ListItem', () => {
	it('should render item with left icon', async () => {
		const rendered = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<ListItem title="First Item" left={<List.Icon color="#000" name="inbox" />} />
			</BlueBaseApp>
		);

		await waitForElement(rendered, 'ListItem');

		expect(
			rendered
				.find('ListItem')
				.last()
				.prop('title')
		).toBe('First Item');

		expect(rendered.find(List.Icon).last()).toBeTruthy();
	});

	it('should render item with right icon', async () => {
		const rendered = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<ListItem title="First Item" right={<List.Icon color="#000" name="inbox" />} />
			</BlueBaseApp>
		);

		await waitForElement(rendered, 'ListItem');

		expect(
			rendered
				.find('ListItem')
				.last()
				.prop('title')
		).toBe('First Item');

		expect(rendered.find(List.Icon).last()).toBeTruthy();
	});
});
