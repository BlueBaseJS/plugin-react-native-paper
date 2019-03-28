import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUIRadio from '@material-ui/core/Radio';
import { RadioProps } from '@bluebase/components';
import React from 'react';
import { objectMapper } from '@bluebase/component-mapper';
import { withPropsStyles } from '../../withPropsStyles';

const styles = ({ color }: RadioProps, theme: any) => {

	// If color is NOT primary, secondary or default then create custom styles
	if (color === 'primary' || color === 'secondary' || color === 'default') {
		return {};
	}

	// If color is undefined, then use defaults
	if (color === undefined) {
		return {};
	}

	return {
		root: {
			// color,
			// tslint:disable-next-line: object-literal-sort-keys
			'&$checked': {
				color,
			},
			'&$disabled': {
				color: theme.palette.action.disabled,
			},
		},
		// tslint:disable-next-line: object-literal-sort-keys
		checked: {},
		disabled: {},
	};
};

const map = {
	checked: 'value',

	// If color is primary, secondary or default set as is
	color: ({ color }: RadioProps) => {
		if (color === 'primary' || color === 'secondary' || color === 'default') {
			return color;
		}

		return;
	},

	onChange: ({ onValueChange }: RadioProps) => (_event: object, checked: boolean)  => {
		if (onValueChange) {
			onValueChange(checked);
		}
	}

};

export const Radio = withPropsStyles(styles)((props: RadioProps) => {

	const { label } = props;

	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	if (Object.keys(newProps.classes).length > 0) {
		delete newProps.color;
	}

	const node = <MUIRadio {...newProps} />;

	if (!label) {
		return node;
	}

	return (<FormControlLabel {...newProps} control={node} />);
}) as React.ComponentType<RadioProps>;
