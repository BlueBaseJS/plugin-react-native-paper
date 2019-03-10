import React from 'react';
import { TextInput } from '../TextInput';
import { shallow } from 'enzyme';

describe('TextInput', () => {

	test('TextInput should get disabled=true', () => {
		const component = shallow(
			<TextInput disabled />
		);
		expect(component.props().disabled).toEqual(true);
	});

	test('TextInput should get disabled=true if there is no disabled prop & editable=false', () => {
		const component = shallow(
			<TextInput editable={false} />
		);
		expect(component.props().disabled).toEqual(true);
	});


	test('TextInput should get disabled=undefined if there is no disabled or editable prop', () => {
		const component = shallow(
			<TextInput  />
		);
		expect(component.props().disabled).toBeUndefined();
		// expect(component).toMatchSnapshot();
	});

	test('TextInput should not call any onChange callbacks, when none are provided', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput />
		);

		component.props().onChange();

		expect(onChange).toBeCalledTimes(0);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChange but not onChangeText', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChange={onChange} />
		);

		component.props().onChange();

		expect(onChange).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChange but not onChangeText, there is no event', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChange={onChange} onChangeText={onChangeText} />
		);

		component.props().onChange();

		expect(onChange).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChange but not onChangeText, there is no event.target', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChange={onChange} onChangeText={onChangeText} />
		);

		component.props().onChange({ foo: 'bar' });

		expect(onChange).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChangeText', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChangeText={onChangeText} />
		);

		component.props().onChange({ target: { value: 'Wow' } });

		expect(onChange).toBeCalledTimes(0);
		expect(onChangeText).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledWith('Wow');
	});

});
