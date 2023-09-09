import { Icon, TextInputIconDefaultProps, TextInputIconProps } from '@bluebase/components';
import React, { useCallback } from 'react';
import { TextInput } from 'react-native-paper';

export const TextInputIcon = (props: TextInputIconProps) => {
	const { onPress, color, disabled, name, size, style, accessibilityLabel } = props;

	const node = useCallback(() => (
		<Icon
			name={name}
			color={color}
			size={size}
		/>
	), [name, color, size]);

	return (
		<TextInput.Icon
			name={node}
			accessibilityLabel={accessibilityLabel}
			onPress={onPress}
			disabled={disabled}
			style={style}
		/>);
};

TextInputIcon.defaultProps = TextInputIconDefaultProps;
