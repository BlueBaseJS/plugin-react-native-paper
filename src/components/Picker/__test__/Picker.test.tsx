import { BlueBaseApp, getComponent } from '@bluebase/core';

import React from 'react';
import { mount } from 'enzyme';
import plugin from '../../../../src/index';
import { waitForElement } from 'enzyme-async-helpers';

const PickerComponent = getComponent('PickerComponent');
const PickerItem = getComponent('BBPickerItem');

describe('picker component', () => {
	it('should  return  menu picker component', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent
					label="Select One"
					mode="menu"
					selectedValue={'sample'}
					onValueChange={(value: any) => console.log('value', value)}
				>
					<PickerItem label="Ok" value="0" />
					<PickerItem label="Ok1" value="1" />
					<PickerItem label="Ok2" value="2" />
					<PickerItem label="Ok3" value="3" />
				</PickerComponent>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'PickerComponent');
		// expect(wrapper).toMatchSnapshot();

		const onDismiss: any = wrapper
			.find('Menu')
			.last()
			.prop('onDismiss');
		onDismiss();
		wrapper.update();
	});

	it('should  return  dropdown picker component', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent
					label="Select One"
					selectedValue={'sample'}
					onValueChange={(value: any) => console.log('value', value)}
				>
					<PickerItem label="Ok" value="0" />
					<PickerItem label="Ok1" value="1" />
					<PickerItem label="Ok2" value="2" />
					<PickerItem label="Ok3" value="3" />
				</PickerComponent>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'PickerComponent');
		// expect(wrapper).toMatchSnapshot();
		const onValueChange: any = wrapper
			.find('Picker')
			.first()
			.prop('onValueChange');
		onValueChange();
		expect(
			wrapper
				.find('Picker')
				.first()
				.prop('label')
		).toBe('Select One');
		expect(
			wrapper
				.find('Picker')
				.first()
				.prop('mode')
		).toBe(undefined);
	});

	it('should  return  menu picker component for android', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent
					label="Select One"
					mode="dialog"
					selectedValue={'sample'}
					onValueChange={(value: any, i: any) => console.log('value', value, '-->', i)}
				>
					<PickerItem label="Ok" value="0" />
					<PickerItem label="Ok1" value="1" />
					<PickerItem label="Ok2" value="2" />
					<PickerItem label="Ok3" value="3" />
				</PickerComponent>
			</BlueBaseApp>
		);

		const data = [{ label: 'ok', value: 'ok' }];
		await waitForElement(wrapper, 'PickerComponent');
		// const instance: any = wrapper
		// 	.find(PickerComponent)
		// 	.last()
		// 	.instance();
		// instance._openMenu();
		expect(wrapper).toMatchSnapshot();
		const onPress: any = wrapper
			.find('ListItem')
			.last()
			.prop('onPress');
		onPress(0, data);
		console.log('===>', onPress(0, data));
	});

	// it('should  return  modal picker component for android', async () => {
	// 	const { PickerComponent } = require('../Picker.native');

	// 	const wrapper = mount(
	// 		<BlueBaseApp plugins={[plugin]}>
	// 			<Picker
	// 				label="Select One"
	// 				mode="menu"
	// 				selectedValue={'sample'}
	// 				onValueChange={(value, i) => console.log('value', value)}
	// 			>
	// 				<PickerItem label="Ok" value="0" />
	// 				<PickerItem label="Ok1" value="1" />
	// 				<PickerItem label="Ok2" value="2" />
	// 				<PickerItem label="Ok3" value="3" />
	// 			</Picker>
	// 		</BlueBaseApp>
	// 	);

	// 	await waitForElement(wrapper, 'Modal');

	// 	const instance: any = wrapper
	// 		.find('PickerComponent[label="enter label"]')
	// 		.last()
	// 		.instance();

	// 	instance.onValueChange();
	// 	const onPress: any = wrapper
	// 		.find('ListItem')
	// 		.first()
	// 		.prop('onPress');
	// 	onPress();

	// 	wrapper.update();
	// 	const ListItemPress: any = wrapper
	// 		.find('View[testID="picker-test"]')
	// 		.last()
	// 		.find('ListItem')
	// 		.last()
	// 		.prop('onPress');

	// 	ListItemPress();

	// 	expect(
	// 		wrapper
	// 			.find('Modal')
	// 			.last()
	// 			.prop('visible')
	// 	).toBe(true);
	// });
});
