import { BlueBaseApp, getComponent } from '@bluebase/core';

import React from 'react';
import { mount } from 'enzyme';
import plugin from '../../../../src/index';
import { waitForElement } from 'enzyme-async-helpers';

const PickerComponent = getComponent('PickerComponent');

describe('picker component', () => {
	it('should  return  menu picker component', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent
					label="enter label"
					selectedValue={'sample'}
					onValueChange={(value: object) => value}
					items={[
						{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
						{ label: 'Jhon', value: 'Jhon' },
						{ label: 'Marry', value: 'Marry' },
					]}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'Picker');
		expect(
			wrapper
				.find('Picker')
				.last()
				.prop('children')
		).toHaveLength(3);
	});

	it('should  return  modal picker component', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent
					label="enter label"
					selectedValue={'sample'}
					mode="modal"
					onValueChange={(value: object) => value}
					items={[
						{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
						{ label: 'Jhon', value: 'Jhon' },
						{ label: 'Marry', value: 'Marry' },
					]}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'Modal');

		const instance: any = wrapper
			.find('PickerComponent[label="enter label"]')
			.last()
			.instance();

		instance.onValueChange();
		const onPress: any = wrapper
			.find('ListItem')
			.first()
			.prop('onPress');
		onPress();

		wrapper.update();
		const ListItemPress: any = wrapper
			.find('View[testID="picker-test"]')
			.last()
			.find('ListItem')
			.last()
			.prop('onPress');

		ListItemPress();

		expect(
			wrapper
				.find('Modal')
				.last()
				.prop('visible')
		).toBe(true);
	});

	it('should  return  menu picker component for android', async () => {
		const { PickerComponent } = require('../Picker.native');

		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent
					label="enter label"
					selectedValue={'sample'}
					onValueChange={(value: object) => value}
					items={[
						{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
						{ label: 'Jhon', value: 'Jhon' },
						{ label: 'Marry', value: 'Marry' },
					]}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'Picker');
		expect(
			wrapper
				.find('Picker')
				.last()
				.prop('children')
		).toHaveLength(3);
	});

	it('should  return  modal picker component for android', async () => {
		const { PickerComponent } = require('../Picker.native');

		const wrapper = mount(
			<BlueBaseApp plugins={[plugin]}>
				<PickerComponent
					label="enter label"
					selectedValue={'sample'}
					styles={{ overlay: {} }}
					mode="modal"
					onValueChange={(value: object) => value}
					items={[
						{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
						{ label: 'Jhon', value: 'Jhon' },
						{ label: 'Marry', value: 'Marry' },
					]}
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'Modal');

		const instance: any = wrapper
			.find('PickerComponent[label="enter label"]')
			.last()
			.instance();

		instance.onValueChange();
		const onPress: any = wrapper
			.find('ListItem')
			.first()
			.prop('onPress');
		onPress();

		wrapper.update();
		const ListItemPress: any = wrapper
			.find('View[testID="picker-test"]')
			.last()
			.find('ListItem')
			.last()
			.prop('onPress');

		ListItemPress();

		expect(
			wrapper
				.find('Modal')
				.last()
				.prop('visible')
		).toBe(true);
	});
});
