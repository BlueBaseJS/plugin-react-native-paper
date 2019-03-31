import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import { RadioGroupProps } from '@bluebase/components';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const RadioGroup = componentMapper<RadioGroupProps>(MuiRadioGroup, {
	onChange: ({ onChange, onValueChange }: any) => (event: any, value: string | number | boolean)  => {
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
	render(props: any, Component: any) {

		const { helperText, label, ...rest } = props;

		return (
			<FormControl component="fieldset">
				<FormLabel component="legend">{label}</FormLabel>
				<Component {...rest} />
				<FormHelperText>{helperText}</FormHelperText>
			</FormControl>
		);
	}
});

