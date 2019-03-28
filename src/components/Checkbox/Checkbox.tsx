import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';
import React from 'react';
import { CheckboxProps } from '@bluebase/components';
import { objectMapper } from '@bluebase/component-mapper';
import { withPropsStyles } from '../../withPropsStyles';

const styles = ({ color }: CheckboxProps, _theme: any) => {

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
	};
};

const map = {
	checked: 'value',

	// If color is primary, secondary or default set as is
	color: ({ color }: CheckboxProps) => {
		if (color === 'primary' || color === 'secondary' || color === 'default') {
			return color;
		}

		return;
	},

	onChange: ({ onValueChange }: CheckboxProps) => (_event: object, checked: boolean)  => {
		if (onValueChange) {
			onValueChange(checked);
		}
	}

};

export const Checkbox = withPropsStyles(styles)((props: CheckboxProps) => {

	const { label } = props;

	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	if (Object.keys(newProps.classes).length > 0) {
		delete newProps.color;
	}

	const node = <MUICheckbox {...newProps} />;

	if (!label) {
		return node;
	}

	return (<FormControlLabel {...newProps} control={node} />);
}) as React.ComponentType<CheckboxProps>;
