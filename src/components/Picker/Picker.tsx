import {
	PickerDefaultProps,
	PickerItem as PickerItemBB,
	PickerProps,
	View,
} from '@bluebase/components';
import { StyleSheet, Text } from 'react-native';

import { DialogPicker } from './DialogPicker';
import { PickerContext } from './PickerContext';
import React from 'react';
import { SelectPicker } from './SelectPicker';
import { objectMapper } from '@bluebase/component-mapper';

const fieldMap = {
	displayEmpty: ({ placeholder }: PickerProps) => !!placeholder,
	native: ({ mode }: PickerProps) => (mode !== 'default' ? false : true),
	value: 'selectedValue',

	onChange: ({ onChange, onValueChange }: any) => (event: any, value: number) => {
		if (onChange) {
			onChange(event, value);
		}

		if (onValueChange) {
			onValueChange(event.target.value, event.target.selectedIndex);
		}
	},

	PickerItem: 'PickerItem',
	children: 'children',
	classes: 'classes',
	disabled: 'disabled',
	error: 'error',
	helperText: 'helperText',
	id: 'id',
	label: 'label',
	mode: 'mode',
	name: 'name',
	placeholder: 'placeholder',
	readOnly: 'readOnly',
	required: 'required',
	style: ({ style }: PickerProps) => StyleSheet.flatten(style),
	variant: 'variant',
};

export const Picker = (props: PickerProps & { PickerItem?: typeof PickerItemBB }) => {
	const newProps = objectMapper(props, fieldMap);

	const {
		children,
		disabled,
		displayEmpty,
		error,
		helperText,
		id,
		label,
		mode,
		name,
		native,
		onChange,
		readOnly,
		value,
		placeholder,
		required,
		variant,
		PickerItem,
		...rest
	} = newProps;

	// const TextProps = {
	// 	disabled,
	// 	error,
	// 	required,
	// 	variant,
	// 	...rest,
	// };

	const PickerComponent = mode === 'dialog' ? DialogPicker : SelectPicker;

	return (
		<PickerContext.Provider value={mode}>
			<View>
				{/* <Text {...TextProps}> */}
				{/* {label ? <Text>{label}</Text> : null} */}
				<PickerComponent {...(props as any)} />
				{/* {helperText ? <Text>{helperText}</Text> : null} */}
				{/* </Text> */}
			</View>
		</PickerContext.Provider>
	);
};

Picker.defaultProps = {
	...PickerDefaultProps,
	PickerItem: PickerItemBB,
};
