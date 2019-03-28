import { SwitchProps } from '@bluebase/components';
import { Theme } from '@material-ui/core';

export const styles = ({ color }: SwitchProps, theme: Theme) => {
	// If color is NOT primary, secondary or default then create custom styles
	if (color === 'primary' || color === 'secondary' || color === 'default') {
		return {};
	}

	// If color is undefined, then use defaults
	if (color === undefined) {
		return {};
	}

	return {
		bar: {},
		checked: {},
		switchBase: {
			// color,
			// tslint:disable-next-line: object-literal-sort-keys
			'&$checked': {
				color,
				// tslint:disable-next-line: object-literal-sort-keys
				'& + $bar': {
					backgroundColor: color,
				},
			},
		},

		disabled: {
			'& + $bar': {
				opacity: theme.palette.type === 'light' ? 0.12 : 0.1,
			},
			// tslint:disable-next-line: object-literal-sort-keys
			'& $icon': {
				boxShadow: theme.shadows[1],
			},
			'&$switchBase': {
				color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
				// tslint:disable-next-line: object-literal-sort-keys
				'& + $bar': {
					backgroundColor:
						theme.palette.type === 'light'
							? theme.palette.common.black
							: theme.palette.common.white,
				},
			},
		},
	};
};
