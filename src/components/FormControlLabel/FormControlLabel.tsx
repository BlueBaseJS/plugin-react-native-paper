import { StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { Text } from '@bluebase/components';
import { Theme } from '@bluebase/core';

export interface FormControlLabelStyles {
	root: StyleProp<TextStyle>;
	normal: StyleProp<TextStyle>;
	error: StyleProp<TextStyle>;
}

export interface FormControlLabelProps {
	error?: boolean;

	style?: StyleProp<TextStyle>;
	styles?: Partial<FormControlLabelStyles>;
}

export const FormControlLabel = (props: FormControlLabelProps) => {

	const { styles, style, error, ...rest } = props;
	const _styles = styles as FormControlLabelStyles;

	const color = (error === true) ? _styles.error : _styles.normal;

	return (<Text {...rest} style={[ _styles.root, color, style ]} />);
};

FormControlLabel.defaultStyles = (theme: Theme) => ({

	root: {
		paddingBottom: theme.spacing.unit,
	},

	normal: {
		color: theme.palette.text.disabled,
	},

	error: {
		color: theme.palette.error.main,
	},
});
