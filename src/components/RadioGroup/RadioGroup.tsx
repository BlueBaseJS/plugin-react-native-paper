import { RadioGroupProps, View } from '@bluebase/components';
import { FormControlLabelProps } from '../FormControlLabel';
import { FormHelperTextProps } from '../FormHelperText';
import { RadioButton as RNPRadio } from 'react-native-paper';
import React from 'react';
import { getComponent } from '@bluebase/core';

const FormControlLabel = getComponent<FormControlLabelProps>('FormControlLabel');
const FormHelperText = getComponent<FormHelperTextProps>('FormHelperText');

export const RadioGroup = (props: RadioGroupProps) => {

	const { error, helperText, label, ...rest } = props;

	const rgprops = {
		...rest,
		onValueChange: props.onValueChange as any,
		value: props.value as any,
	};

	const node = <RNPRadio.Group {...rgprops} />;

	if (!label && !helperText) {
		return node;
	}

	return (
		<View>
			{label ? <FormControlLabel error={error}>{label}</FormControlLabel> : null}
			{node}
			{helperText ? <FormHelperText error={error}>{helperText}</FormHelperText> : null}
		</View>
	);
};

