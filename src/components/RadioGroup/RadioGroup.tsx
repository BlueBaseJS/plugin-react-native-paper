import { RadioGroupProps, View } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import React from 'react';
import { RadioButton as RNPRadio } from 'react-native-paper';

import { FormControlLabelProps } from '../FormControlLabel';
import { FormHelperTextProps } from '../FormHelperText';

const FormControlLabel = getComponent<FormControlLabelProps & any>('FormControlLabel');
const FormHelperText = getComponent<FormHelperTextProps & any>('FormHelperText');

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

