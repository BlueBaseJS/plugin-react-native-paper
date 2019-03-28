import React from 'react';
import { Switch } from '../Switch';
import { mount } from 'enzyme';

describe('Switch', () => {

	it('should set the checked to true when value is true', () => {
		const component = mount(
			<Switch value />
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Switch').first().prop('checked')).toEqual(true);
	});

	it('should set the checked to false when value is false', () => {
		const component = mount(
			<Switch value={false} />
		);

		expect(component.find('Switch').first().prop('checked')).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', () => {
		const component = mount(
			<Switch color="primary" />
		);

		expect(component.find('Switch').first().prop('color')).toEqual('primary');
	});

	it('should pass the color as is when set to "secondary"', () => {
		const component = mount(
			<Switch color="secondary" />
		);

		expect(component.find('Switch').first().prop('color')).toEqual('secondary');
	});

	it('should pass the color as is when set to "default"', () => {
		const component = mount(
			<Switch color="default" />
		);

		expect(component.find('Switch').first().prop('color')).toEqual('default');
	});

	it('should set the color prop to undefined and create classed for custom colors', () => {
		const component = mount(
			<Switch color="red" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('WithStyles(Switch)').first().prop('classes')).toBeTruthy();
		expect(component.find('WithStyles(Switch)').first().prop('color')).toEqual(undefined);
	});

	it('should set the label component', () => {
		const component = mount(
			<Switch label="Foo" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('FormControlLabel').length).toBeGreaterThan(0);
		expect(component.find('FormControlLabel').first().prop('label')).toEqual('Foo');
	});

	it('should map onValueChange fn to onChange fn', () => {

		const cb = jest.fn();
		const component = mount(
			<Switch label="Foo" onValueChange={cb} />
		);

		const onChange = component.find('Switch').first().prop('onChange') as any;

		onChange({}, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(true);
	});

});


