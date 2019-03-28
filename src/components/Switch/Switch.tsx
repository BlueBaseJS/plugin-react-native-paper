import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUISwitch from '@material-ui/core/Switch';
import React from 'react';
import { SwitchProps } from '@bluebase/components';
import { objectMapper } from '@bluebase/component-mapper';

const map = {
	checked: 'value',

	// If color is NOT primary, secondary or default then create custom styles
	classes: ({ color }: SwitchProps) => {
		if (color === 'primary' || color === 'secondary' || color === 'default') {
			return;
		}

		// If color is undefined, then use defaults
		if (color === undefined) {
			return;
		}

		return {
			bar: {},
			checked: {},
			switchBase: {
				color,
				// tslint:disable-next-line: object-literal-sort-keys
				'&$colorChecked': {
					color,
					// tslint:disable-next-line: object-literal-sort-keys
					'& + $colorBar': {
						backgroundColor: color,
					},
				},
			},
		};
	},

	// If color is primary, secondary or default set as is
	color: ({ color }: SwitchProps) => {
		if (color === 'primary' || color === 'secondary' || color === 'default') {
			return color;
		}

		return;
	},

	onChange: ({ onValueChange }: SwitchProps) => (_event: object, checked: boolean)  => {
		if (onValueChange) {
			onValueChange(checked);
		}
	}

};

export const Switch = (props: SwitchProps) => {

	const { label } = props;

	const newProps = objectMapper(props, map, { rest: true });
	const node = <MUISwitch {...newProps} />;

	if (!label) {
		return node;
	}

	return (<FormControlLabel {...newProps} control={node} />);
};
