import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { TableCell } from '../index';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('TableCell component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableCell>
				<Text>TableCell test</Text>
			</TableCell>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableCell);
	expect(wrapper.props().children).toBeDefined();
});
