import { componentMapper } from '@bluebase/component-mapper';
import { RadioProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import { RadioButton as RNPRadio } from 'react-native-paper';

import { SelectionControl } from '../SelectionControl';

export const Radio = componentMapper<RadioProps>(
	SelectionControl,
	{
		ControlComponent: () => RNPRadio,

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

		status: ({ checked }: RadioProps) => {
			if (checked === true) {
				return 'checked';
			}

			if (checked === false) {
				return 'unchecked';
			}

			return;
		},
	},
	{
		ignore: ['checked', 'styles'],
		rest: true,
	}
);

(Radio as any).defaultStyles = (theme: Theme) => ({
	primary: { color: theme.palette.primary.main },
	secondary: { color: theme.palette.secondary.main },
});
