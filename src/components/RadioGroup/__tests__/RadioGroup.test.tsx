import { Radio } from '../../Radio';
import { RadioGroup } from '../RadioGroup';
import React from 'react';
import { mount } from 'enzyme';

describe('RadioGroup', () => {

	it('should map onValueChange fn to onChange fn', () => {

		const cb = jest.fn();
		const component = mount(
			<RadioGroup onValueChange={cb}>
				<Radio label="Option A" value="option-a" />
				<Radio label="Option B" value="option-b" />
				<Radio label="Option C" value="option-c" />
			</RadioGroup>
		);

		const radio = component.find('Radio').first();

		const onChange = radio.prop('onChange') as any;

		onChange({ target: { value: radio.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('option-a');
	});

	it('should pass onChange as is if available', () => {

		const cb = jest.fn();

		const RG = RadioGroup as any;

		const component = mount(
			<RG onChange={cb}>
				<Radio label="Option A" value="option-a" />
				<Radio label="Option B" value="option-b" />
				<Radio label="Option C" value="option-c" />
			</RG>
		);

		const onChange = component.find('RadioGroup').first().prop('onChange') as any;

		onChange('foo', true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

});


