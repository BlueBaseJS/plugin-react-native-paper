import { AvatarProps, BlueBaseImage, Icon, IconProps } from '@bluebase/components';
import { ThemeContext, ThemeContextData } from '@bluebase/core';
import React, { useContext } from 'react';
import { Avatar } from 'react-native-paper';

const AvatarComponent = (props: AvatarProps) => {
	const { theme }: ThemeContextData = useContext(ThemeContext);

	const size = props.size || 56;

	function getBorderRadius() {
		switch (props.variant) {
			case 'square':
				return 0;
			case 'rounded':
				return theme.spacing.unit;

			default:
				return size / 2;
		}
	}

	const avatarStyle = {
		...props.style,
		borderRadius: getBorderRadius(),
	};

	if (props.type === 'icon' && props.icon !== undefined) {
		const icon = ({ color, size: Size }: IconProps) => (
			<Icon {...props} name={props.icon} color={color} size={Size} style={props.textStyle} />
		);

		return (
			// eslint-disable-next-line react/jsx-no-bind
			<Avatar.Icon {...props} icon={icon} size={size} color={props.color} style={avatarStyle} />
		);
	}

	if (props.type === 'text' && props.text !== undefined) {
		return (
			<Avatar.Text
				{...props}
				size={size}
				label={props.text}
				labelStyle={props.textStyle}
				style={avatarStyle}
			/>
		);
	}

	if (props.type === 'image' && props.image !== undefined) {
		return (
			<BlueBaseImage
				{...props}
				source={props.image as any}
				style={{ ...(avatarStyle as any), width: size, height: size }}
			/>
		);
	}
	return null;
};

export { AvatarComponent as Avatar };
