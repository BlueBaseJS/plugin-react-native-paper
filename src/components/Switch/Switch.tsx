import { SelectionControl } from '../SelectionControl';
import { Switch as RNPSwitch } from 'react-native-paper';
import { SwitchProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import { componentMapper } from '@bluebase/component-mapper';

export const Switch = componentMapper<SwitchProps>(SelectionControl, {

	ControlComponent: () => RNPSwitch,

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

	value: 'checked'
}, {
	ignore: ['checked', 'styles'],
	rest: true,
});


(Switch as any).defaultStyles = (theme: Theme) => ({
	primary: { color: theme.palette.primary.main },
	secondary: { color: theme.palette.secondary.main },
});