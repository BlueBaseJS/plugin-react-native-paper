import { BlueBaseApp, getComponent } from '@bluebase/core';

import React from 'react';
import { mount } from 'enzyme';
import plugin from '../../../../src/index';
import { waitForElement } from 'enzyme-async-helpers';

const PickerComponent = getComponent('PickerComponent');
const PickerItem = getComponent('PickerItem');

describe('picker component', () => {
	it('should  return  menu picker component', async () => {
		const func = jest.fn();
		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent label="Select One" mode="menu" onValueChange={func}>
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
		const onPress: any = wrapper
			.find('MenuItem')
			.first()
			.prop('onPress');
		onPress();
		wrapper.update();
	});

	it('should  return  dropdown picker component', async () => {
		const func = jest.fn();
		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent label="Select One" onValueChange={func}>
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
});
