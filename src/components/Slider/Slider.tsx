import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MUISlider from '@material-ui/lab/Slider';
import React from 'react';
import { SliderProps, View } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const Slider = componentMapper<SliderProps>(MUISlider, {

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
			...props
		} = newProps;

		const formControlProps = {
			error,
			required,
		};

		return (
			<FormControl {...formControlProps}>
				<View>
					{label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
					<Component id={id} {...props} />
				</View>
				{helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
			</FormControl>
		);
	}
});
