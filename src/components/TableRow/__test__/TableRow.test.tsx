import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { TableRow } from '../index';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('TableRow component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableRow>
				<Text>TableRow test</Text>
			</TableRow>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableRow);
	expect(wrapper.props().children).toBeDefined();
});
