import { CheckboxProps } from '@bluebase/components';
// tslint:disable-next-line: sort-imports
import { Checkbox as RNPCheckbox } from 'react-native-paper';
import { SelectionControl } from '../SelectionControl';
import { Theme } from '@bluebase/core';
import { componentMapper } from '@bluebase/component-mapper';

export const Checkbox = componentMapper<CheckboxProps>(SelectionControl, {

	ControlComponent: () => RNPCheckbox.Android,

	color: ({ color, styles }: any) => {
		if (color === 'primary') {
			return styles.primary.color;
		}
		if (color === 'secondary') {
			return styles.secondary.color;
		}
		if (color === 'default') {
			return '';
		}

		return color;
	},
	onPress: ({ onPress, onValueChange, value, checked }: any) => ()  => {
		if (onPress) {
			onPress();
		}
		if (onValueChange) {
			onValueChange(value, !checked);
		}
	},

	status: ({ checked, indeterminate }: CheckboxProps) => {
		if (indeterminate === true) {
			return 'indeterminate';
		}

		return checked === true ? 'checked' : 'unchecked';
	}
}, {
	ignore: ['indeterminate', 'checked', 'styles'],
	rest: true,
});


(Checkbox as any).defaultStyles = (theme: Theme) => ({
	primary: { color: theme.palette.primary.main },
	secondary: { color: theme.palette.secondary.main },
});