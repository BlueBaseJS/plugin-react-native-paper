import { Table } from '../Table';
import React from 'react';
import { BlueBaseApp } from '@bluebase/core';

import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';


test('Table component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>

			<Table>
				<Text>
					table test
						</Text>
			</Table>

		</BlueBaseApp>

	);
	await waitForElement(wrapper, Table);
	expect(wrapper).toMatchSnapshot();
	console.log('wrapper', wrapper)
	expect(wrapper).toBeDefined();
});

test('Table component with style prop', () => {
	const wrapper = mount(

		<BlueBaseApp plugins={[Plugin]}>

			<Table style={{ margin: 8 }}>
			</Table>

		</BlueBaseApp>


	);
	expect(wrapper);
});
