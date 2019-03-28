import { Radio } from '../Radio';
import React from 'react';
import { mount } from 'enzyme';

describe('Radio', () => {

	it('should set the checked to true when value is true', () => {
		const component = mount(
			<Radio value />
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Radio').first().prop('checked')).toEqual(true);
	});

	it('should set the checked to false when value is false', () => {
		const component = mount(
			<Radio value={false} />
		);

		expect(component.find('Radio').first().prop('checked')).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', () => {
		const component = mount(
			<Radio color="primary" />
		);

		expect(component.find('Radio').first().prop('color')).toEqual('primary');
	});

	it('should pass the color as is when set to "secondary"', () => {
		const component = mount(
			<Radio color="secondary" />
		);

		expect(component.find('Radio').first().prop('color')).toEqual('secondary');
	});

	it('should pass the color as is when set to "default"', () => {
		const component = mount(
			<Radio color="default" />
		);

		expect(component.find('Radio').first().prop('color')).toEqual('default');
	});

	it('should set the color prop to undefined and create classed for custom colors', () => {
		const component = mount(
			<Radio color="red" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('WithStyles(Radio)').first().prop('classes')).toBeTruthy();
		expect(component.find('WithStyles(Radio)').first().prop('color')).toEqual(undefined);
	});

	it('should set the label component', () => {
		const component = mount(
			<Radio label="Foo" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('FormControlLabel').length).toBeGreaterThan(0);
		expect(component.find('FormControlLabel').first().prop('label')).toEqual('Foo');
	});

	it('should map onValueChange fn to onChange fn', () => {

		const cb = jest.fn();
		const component = mount(
			<Radio label="Foo" onValueChange={cb} />
		);

		const onChange = component.find('Radio').first().prop('onChange') as any;

		onChange({}, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(true);
	});

});


