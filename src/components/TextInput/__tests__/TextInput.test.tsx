import { shallow } from 'enzyme';
import React from 'react';
import { HelperText } from 'react-native-paper';

import { TextInput } from '..';

describe('TextInput', () => {
	test('should forward mode=outlined if variant=outlined', () => {
		const component = shallow(<TextInput variant="outlined" />);
		expect(component.props().mode).toEqual('outlined');
	});

	test('should forward mode=flat if variant !== outlined', () => {
		const component = shallow(<TextInput variant="filled" />);
		expect(component.props().mode).toEqual('flat');
	});

	test('should show helperText', () => {
		const component = shallow(<TextInput helperText="Some information" />);
		expect(
			component
				.find(HelperText)
				.children()
				.text()
		).toBe('Some information');
		expect(component.find(HelperText).prop('type')).toBe('info');
	});

	test('should show helperText with error type', () => {
		const component = shallow(<TextInput helperText="Some information" error />);
		expect(
			component
				.find(HelperText)
				.children()
				.text()
		).toBe('Some information');
		expect(component.find(HelperText).prop('type')).toBe('error');
	});

	test('should not show helperText', () => {
		const component = shallow(<TextInput />);
		expect(component.find(HelperText)).toHaveLength(0);
	});
});
