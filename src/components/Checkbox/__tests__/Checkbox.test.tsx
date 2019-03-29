import { Checkbox } from '../Checkbox';
import React from 'react';
import { mount } from 'enzyme';

describe('Checkbox', () => {

	it('should set the checked to true when checked is true', () => {
		const component = mount(
			<Checkbox checked />
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Checkbox').first().prop('checked')).toEqual(true);
	});

	it('should set the checked to false when checked is false', () => {
		const component = mount(
			<Checkbox checked={false} />
		);

		expect(component.find('Checkbox').first().prop('checked')).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', () => {
		const component = mount(
			<Checkbox color="primary" />
		);

		expect(component.find('Checkbox').first().prop('color')).toEqual('primary');
	});

	it('should pass the color as is when set to "secondary"', () => {
		const component = mount(
			<Checkbox color="secondary" />
		);

		expect(component.find('Checkbox').first().prop('color')).toEqual('secondary');
	});

	it('should pass the color as is when set to "default"', () => {
		const component = mount(
			<Checkbox color="default" />
		);

		expect(component.find('Checkbox').first().prop('color')).toEqual('default');
	});

	it('should set the color prop to undefined and create classed for custom colors', () => {
		const component = mount(
			<Checkbox color="red" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('WithStyles(Checkbox)').first().prop('classes')).toBeTruthy();
		expect(component.find('WithStyles(Checkbox)').first().prop('color')).toEqual(undefined);
	});

	it('should set the label component', () => {
		const component = mount(
			<Checkbox label="Foo" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('FormControlLabel').length).toBeGreaterThan(0);
		expect(component.find('FormControlLabel').first().prop('label')).toEqual('Foo');
	});

	it('should map onValueChange fn to onChange fn', () => {

		const cb = jest.fn();
		const component = mount(
			<Checkbox label="Foo" onValueChange={cb} />
		);

		const onChange = component.find('Checkbox').first().prop('onChange') as any;

		onChange({}, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(true);
	});

});


