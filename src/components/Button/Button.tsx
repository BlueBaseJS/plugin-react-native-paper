import { ButtonProps, DynamicIcon, IconProps } from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import React from 'react';
import { Button as BButton } from 'react-native-paper';

export const Button = (props: ButtonProps) => {
	const { theme } = useTheme();
	const { children, color, title, variant, ...rest } = props;

	const rnpColor =
		color === 'primary' ||
		color === 'secondary' ||
		color === 'error' ||
		color === 'warning' ||
		color === 'success'
			? (theme.palette as any)[color].main
			: color;

	let icon;

	if (props.icon) {
		const iconProps = props.icon;
		// eslint-disable-next-line react/display-name
		icon = ({ color: iColor, size }: IconProps) => (
			<DynamicIcon {...iconProps} color={iColor} size={size} />
		);
	}

	return (
		<BButton {...rest} icon={icon} mode={variant} color={rnpColor as any}>
			{children || title}
		</BButton>
	);
};
