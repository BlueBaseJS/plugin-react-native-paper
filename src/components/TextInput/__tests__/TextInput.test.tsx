import React from 'react';
import { TextInput } from '..';
import { shallow } from 'enzyme';

describe('TextInput', () => {

	test('should forward mode=outlined if variant=outlined', () => {
		const component = shallow(
			<TextInput variant="outlined" />
		);
		expect(component.props().mode).toEqual('outlined');
	});

	test('should forward mode=flat if variant !== outlined', () => {
		const component = shallow(
			<TextInput variant="filled" />
		);
		expect(component.props().mode).toEqual('flat');
	});

});
