import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { TableHead } from '../index';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('TableHeader component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableHead>
				<Text>TableHeader test</Text>
			</TableHead>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableHead);
	expect(wrapper.props().children).toBeDefined();
});
