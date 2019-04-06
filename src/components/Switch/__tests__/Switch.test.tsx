import { BlueBaseApp } from '@bluebase/core';
import React from 'react';
import { Switch } from '../Switch';
import { getComponent } from '@bluebase/components';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe.only('Switch', () => {

	it('should set the checked to true when checked is true', () => {
		const component = mount(
			<Switch checked />
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Switch').first().prop('value')).toEqual(true);
	});

	it('should set the checked to false when checked is false', () => {
		const component = mount(
			<Switch checked={false} />
		);

		expect(component.find('Switch').first().prop('value')).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', async () => {

		const BBSwitch = getComponent('Switch');

		const component = mount(
			<BlueBaseApp components={{ Switch }}>
				<BBSwitch color="primary" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBSwitch);

		// expect(component).toMatchSnapshot();
		expect(component.find('RCTSwitch').last().prop('onTintColor')).toEqual('#3f51b5');
	});

	it('should pass the color as is when set to "secondary"', async () => {

		const BBSwitch = getComponent('Switch');

		const component = mount(
			<BlueBaseApp components={{ Switch }}>
				<BBSwitch color="secondary" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBSwitch);

		// expect(component).toMatchSnapshot();
		expect(component.find('RCTSwitch').last().prop('onTintColor')).toEqual('#f50057');
	});

	it('should pass the color as is when set to "default"', async () => {

		const BBSwitch = getComponent('Switch');

		const component = mount(
			<BlueBaseApp components={{ Switch }}>
				<BBSwitch color="default" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBSwitch);

		// expect(component).toMatchSnapshot();
		expect(component.find('RCTSwitch').last().prop('onTintColor')).toEqual('#03dac4');
	});

	it('should set the color prop to undefined and create classes for custom colors', async () => {
		const BBSwitch = getComponent('Switch');

		const component = mount(
			<BlueBaseApp components={{ Switch }}>
				<BBSwitch color="red" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBSwitch);

		// expect(component).toMatchSnapshot();
		expect(component.find('RCTSwitch').last().prop('onTintColor')).toEqual('red');
	});

	it('should set the label component', async () => {
		const BBSwitch = getComponent('Switch');

		const component = mount(
			<BlueBaseApp components={{ Switch }}>
				<BBSwitch label="Foo" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBSwitch);

		// expect(component).toMatchSnapshot();
		expect(component.find('Switch Text').last().text()).toEqual('Foo');
	});

});


