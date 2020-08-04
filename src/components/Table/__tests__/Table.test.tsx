import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { Table } from '../index';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('Table component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Table>
				<Text>Table test</Text>
			</Table>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Table);
	expect(wrapper.props().children).toBeDefined();
});
