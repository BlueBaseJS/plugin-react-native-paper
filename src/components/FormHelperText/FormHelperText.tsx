
import { StyleProp, TextStyle } from 'react-native';
import { Caption } from '@bluebase/components';
import React from 'react';
import { Theme } from '@bluebase/core';

export interface FormHelperTextStyles {
	root: StyleProp<TextStyle>;
	normal: StyleProp<TextStyle>;
	error: StyleProp<TextStyle>;
}

export interface FormHelperTextProps {
	error?: boolean;

	style?: StyleProp<TextStyle>;
	styles?: Partial<FormHelperTextStyles>;
}

export const FormHelperText = (props: FormHelperTextProps) => {

	const { styles, style, error, ...rest } = props;
	const _styles = styles as FormHelperTextStyles;

	const color = (error === true) ? _styles.error : _styles.normal;

	return (<Caption {...rest} style={[ _styles.root, color, style ]} />);
};

FormHelperText.defaultStyles = (theme: Theme) => ({

	root: {
		marginTop: theme.spacing.unit,
	},

	normal: {
		color: theme.palette.text.disabled,
	},

	error: {
		color: theme.palette.error.main,
	},
});

