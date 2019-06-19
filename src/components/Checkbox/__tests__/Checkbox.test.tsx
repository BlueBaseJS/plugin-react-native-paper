import { BlueBaseApp, getComponent } from '@bluebase/core';

import { Checkbox } from '../Checkbox';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe.only('Checkbox', () => {

	it('should set the status to checked when checked is true', () => {
		const component = mount(
			<Checkbox checked />
		);

		// expect(component).toMatchSnapshot();
		expect(component.childAt(0).prop('status')).toEqual('checked');
	});

	it('should set the status to unchecked when checked is false', () => {
		const component = mount(
			<Checkbox checked={false} />
		);

		expect(component.childAt(0).prop('status')).toEqual('unchecked');
	});

	it('should set the status to indeterminate when indeterminate flag is true', () => {
		const component = mount(
			<Checkbox checked={false} indeterminate />
		);

		// expect(component).toMatchSnapshot();
		expect(component.childAt(0).prop('status')).toEqual('indeterminate');
	});

	it('should pass the color as is when set to "primary"', async () => {

		const BBCheckbox = getComponent('Checkbox');

		const component = mount(
			<BlueBaseApp components={{ Checkbox }}>
				<BBCheckbox color="primary" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBCheckbox);

		// expect(component).toMatchSnapshot();
		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('#3f51b5');
	});

	it('should pass the color as is when set to "secondary"', async () => {

		const BBCheckbox = getComponent('Checkbox');

		const component = mount(
			<BlueBaseApp components={{ Checkbox }}>
				<BBCheckbox color="secondary" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBCheckbox);

		// expect(component).toMatchSnapshot();
		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('#f50057');
	});

	it('should pass the color as is when set to "default"', async () => {

		const BBCheckbox = getComponent('Checkbox');

		const component = mount(
			<BlueBaseApp components={{ Checkbox }}>
				<BBCheckbox color="default" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBCheckbox);

		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('');
		// expect(component).toMatchSnapshot();
	});

	it('should set the color prop to undefined and create classes for custom colors', async () => {
		const BBCheckbox = getComponent('Checkbox');

		const component = mount(
			<BlueBaseApp components={{ Checkbox }}>
				<BBCheckbox color="red" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBCheckbox);

		// expect(component).toMatchSnapshot();
		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('red');
	});

	it('should set the label component', async () => {
		const BBCheckbox = getComponent('Checkbox');

		const component = mount(
			<BlueBaseApp components={{ Checkbox }}>
				<BBCheckbox label="Foo" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBCheckbox);

		// expect(component).toMatchSnapshot();
		expect(component.find('Checkbox Text').last().text()).toEqual('Foo');
	});

	it('should check that the onPress and onValueChange is binded correctly', async () => {
		const onPressFunc = jest.fn();
		const onValueChangeFunc = jest.fn();

		const BBCheckbox = getComponent('Checkbox');

		const component = mount(
			<BlueBaseApp components={{ Checkbox }}>
				<BBCheckbox color="default" onPress={onPressFunc} value={1} onValueChange={onValueChangeFunc} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBCheckbox);

		const  onPress = component.find('TouchableHighlight').last().prop('onPress') as any;
		onPress();
		expect(onPressFunc).toBeCalled();

		const  onValueChange = component.find('TouchableHighlight').last().prop('onValueChange') as any;
		onValueChange();
		expect(onValueChangeFunc).toBeCalledWith(1, true);
	});

});


