import { Icon, IconButtonDefaultProps, IconButtonProps } from '@bluebase/components';
import React, { useCallback } from 'react';
import { IconButton as RNPIconButton } from 'react-native-paper';

export const IconButton = (props: IconButtonProps) => {
	const { onPress, color, disabled, name, size, style, accessibilityLabel } = props;

	const node = useCallback(() => (
		<Icon
			name={name}
			color={color}
			size={size}
		/>
	), [name, color, size]);

	return (
		<RNPIconButton
			icon={node}
			accessibilityLabel={accessibilityLabel}
			onPress={onPress}
			disabled={disabled}
			style={style}
		/>);
};

IconButton.defaultProps = IconButtonDefaultProps;
