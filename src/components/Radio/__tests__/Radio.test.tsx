import { BlueBaseApp } from '@bluebase/core';
import { Radio } from '../Radio';
import React from 'react';
import { getComponent } from '@bluebase/components';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe.only('Radio', () => {

	it('should set the status to checked when checked is true', () => {
		const component = mount(
			<Radio checked />
		);

		// expect(component).toMatchSnapshot();
		expect(component.childAt(0).prop('status')).toEqual('checked');
	});

	it('should set the status to unchecked when checked is false', () => {
		const component = mount(
			<Radio checked={false} />
		);

		expect(component.childAt(0).prop('status')).toEqual('unchecked');
	});

	it('should pass the color as is when set to "primary"', async () => {

		const BBRadio = getComponent('Radio');

		const component = mount(
			<BlueBaseApp components={{ Radio }}>
				<BBRadio color="primary" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBRadio);

		// expect(component).toMatchSnapshot();
		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('#3f51b5');
	});

	it('should pass the color as is when set to "secondary"', async () => {

		const BBRadio = getComponent('Radio');

		const component = mount(
			<BlueBaseApp components={{ Radio }}>
				<BBRadio color="secondary" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBRadio);

		// expect(component).toMatchSnapshot();
		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('#f50057');
	});

	it('should pass the color as is when set to "default"', async () => {

		const BBRadio = getComponent('Radio');

		const component = mount(
			<BlueBaseApp components={{ Radio }}>
				<BBRadio color="default" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBRadio);

		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('');
		// expect(component).toMatchSnapshot();
	});

	it('should set the color prop to undefined and create classes for custom colors', async () => {
		const BBRadio = getComponent('Radio');

		const component = mount(
			<BlueBaseApp components={{ Radio }}>
				<BBRadio color="red" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBRadio);

		// expect(component).toMatchSnapshot();
		expect(component.find('TouchableHighlight').last().prop('color')).toEqual('red');
	});

	it('should set the label component', async () => {
		const BBRadio = getComponent('Radio');

		const component = mount(
			<BlueBaseApp components={{ Radio }}>
				<BBRadio label="Foo" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BBRadio);

		// expect(component).toMatchSnapshot();
		expect(component.find('Radio Text').last().text()).toEqual('Foo');
	});

});
