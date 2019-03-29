import { Radio } from '../Radio';
import React from 'react';
import { mount } from 'enzyme';

describe('Radio', () => {

	it('should set the checked to true when checked is true', () => {
		const component = mount(
			<Radio checked />
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Radio').first().prop('checked')).toEqual(true);
	});

	it('should set the checked to false when checked is false', () => {
		const component = mount(
			<Radio checked={false} />
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

		const radio = component.find('Radio').first();
		const onChange = radio.prop('onChange') as any;

		onChange({ target: { value: radio.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(undefined, true);
	});

	it('should map onValueChange fn to onChange fn with value', () => {

		const cb = jest.fn();
		const component = mount(
			<Radio label="Foo" value="foo" onValueChange={cb} />
		);

		const radio = component.find('Radio').first();
		const onChange = radio.prop('onChange') as any;

		onChange({ target: { value: radio.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

	it('should pass onChange as is if available', () => {

		const cb = jest.fn();

		const component = mount(
			<Radio label="Foo" onChange={cb} />
		);

		const onChange = component.find('Radio').first().prop('onChange') as any;

		onChange('foo', true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

});


