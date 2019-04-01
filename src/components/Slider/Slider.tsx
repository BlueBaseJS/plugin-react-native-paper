import { Theme, withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import MUISlider from '@material-ui/lab/Slider';
import React from 'react';
import { SliderProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

const styles = (theme: Theme) => ({
	helperText: {
		marginTop: theme.spacing.unit * 2
	},
	label: {
		marginBottom: theme.spacing.unit * 2
	},
});

export const Slider = withStyles(styles)(componentMapper<SliderProps>(MUISlider, {

	max: 'maximumValue',
	min: 'minimumValue',

	onChange: ({ onChange, onValueChange }: any) => (event: any, value: number)  => {
		if (onChange) {
			onChange(event, value);
		}

		if (onValueChange) {
			onValueChange(value);
		}
	}

}, {
	ignore: ['onValueChange'],
	rest: true,
	render(newProps: any, Component: any) {
		const {
			error,
			helperText,
			id,
			label,
			required,
			classes,
			...props
		} = newProps;

		const formControlProps = {
			error,
			required,
		};

		return (
			<FormControl {...formControlProps}>
				{label ? <FormLabel className={classes.label} htmlFor={id}>{label}</FormLabel> : null}
				<Component id={id} {...props} />
				{helperText ? <FormHelperText className={classes.helperText}>{helperText}</FormHelperText> : null}
			</FormControl>
		);
	}
}));
