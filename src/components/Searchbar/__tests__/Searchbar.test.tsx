import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { Searchbar } from '../index';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('Searchbar component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Searchbar>
				<Text>Searchbar test</Text>
			</Searchbar>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Searchbar);
	expect(wrapper.props().children).toBeDefined();
});
