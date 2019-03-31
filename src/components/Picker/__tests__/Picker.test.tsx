import { Picker as _Picker } from '../Picker';
import { PickerItem } from '../../PickerItem';
import React from 'react';
import { mount } from 'enzyme';

describe('Picker', () => {

	it('should create a native select dropdown', () => {

		(_Picker as any).Item = PickerItem;
		const Picker = _Picker as any;

		const component = mount(
			<Picker
				label="Language"
				name="language"
				id="language-simple"
				// mode="default"
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('label').text()).toBe('Language');
		expect(component.find('Select').first().prop('native')).toBe(true);
		expect(component.find('select').first().prop('name')).toBe('language');
		expect(component.find('select').first().prop('id')).toBe('language-simple');
		expect(component.find('select option')).toHaveLength(3);
	});

	it('should render placeholder', () => {

		(_Picker as any).Item = PickerItem;
		const Picker = _Picker as any;

		const component = mount(
			<Picker
				label="Language"
				name="language"
				id="language-simple"
				placeholder="None"
				PickerItem={PickerItem}
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('select option')).toHaveLength(4);
		expect(component.find('select option').first().text()).toBe('None');
		// expect((component.find('InputBase').prop('inputProps') as any).children[0]).toBeTruthy();
	});

	it('should set native prop as false if mode is not default', () => {

		(_Picker as any).Item = PickerItem;
		const Picker = _Picker as any;

		const component = mount(
			<Picker
				label="Language"
				name="language"
				id="language-simple"
				mode="dropdown"
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Select').first().prop('native')).toBe(false);
	});

	it('should set variant to filled', () => {

		(_Picker as any).Item = PickerItem;
		const Picker = _Picker as any;

		const component = mount(
			<Picker
				label="Language"
				name="language"
				id="language-simple"
				variant="filled"
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('FilledInput').getElements()).toHaveLength(1);
	});

	it('should set variant to outlined', () => {

		(_Picker as any).Item = PickerItem;
		const Picker = _Picker as any;

		const component = mount(
			<Picker
				label="Language"
				name="language"
				id="language-simple"
				variant="outlined"
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('OutlinedInput').getElements()).toHaveLength(1);
	});

	it('should map onValueChange fn to onChange fn', () => {

		const cb = jest.fn();

		(_Picker as any).Item = PickerItem;
		const Picker = _Picker as any;

		const component = mount(
			<Picker
				onValueChange={cb}
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		);

		component.find('select').simulate('change', {
			target: { value: 'php', selectedIndex: 2 }
		});

		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('php', 2);
	});

	// it('should map onValueChange fn to onChange fn with value', () => {

	// 	const cb = jest.fn();
	// 	const component = mount(
	// 		<Picker onValueChange={cb} />
	// 	);

	// 	const sw = component.find('Picker').first();
	// 	const onChange = sw.prop('onChange') as any;

	// 	onChange({ target: { value: sw.prop('value') } }, 43);

	// 	// expect(component).toMatchSnapshot();
	// 	expect(cb).toBeCalledTimes(1);
	// 	expect(cb).toBeCalledWith(43);
	// });

	it('should pass onChange as is if available', () => {

		const cb = jest.fn();

		(_Picker as any).Item = PickerItem;
		const Picker = _Picker as any;

		const component = mount(
			<Picker
				onChange={cb}
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		);

		component.find('select').simulate('change', {
			target: { value: 'php', selectedIndex: 2 }
		});

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
	});

});


