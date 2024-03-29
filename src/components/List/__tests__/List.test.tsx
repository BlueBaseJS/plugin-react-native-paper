import { List } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
// import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

describe('List', () => {
	it('should render a list with 2 items', async () => {
		const rendered = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<List>
					<List.Subheader>Some title</List.Subheader>
					<List.Item title="First Item" left={<List.Icon name="folder" />} onPress={console.log} />
					<List.Item title="Second Item" left={<List.Icon color="#000" name="inbox" />} />
				</List>
			</BlueBaseApp>
		);

		await waitForElement(rendered, List);

		expect(
			rendered
				.find('ListSubheader Text')
				.last()
				.text()
		).toBe('Some title');

		expect(
			rendered
				.find('Icon')
				.last()
				.prop('name')
		).toBe('inbox');
	});
});
