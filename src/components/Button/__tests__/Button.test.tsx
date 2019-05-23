import { Button as BB_Button } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { Button } from '../';
import React from 'react';
import { View } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('render and outline button with primary color', async () => {
	const wrapper = mount(
		<BlueBaseApp components={{ Button }}>
			<BB_Button variant="outlined" color="primary" />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, BB_Button);
	expect(
		(wrapper as any)
			.find('Button')
			.first()
			.prop('color')
	).toBe('primary');
	expect(
		(wrapper as any)
			.find('Button')
			.first()
			.prop('variant')
	).toBe('outlined');
});

const icon = () => {
	return <View />;
};
test('render and outline button with secondary color', async () => {
	const wrapper = mount(
		<BlueBaseApp components={{ Button }}>
			<BB_Button variant="outlined" color="secondary" icon={icon as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, BB_Button);
	expect(
		(wrapper as any)
			.find('Button')
			.first()
			.prop('color')
	).toBe('secondary');
});
