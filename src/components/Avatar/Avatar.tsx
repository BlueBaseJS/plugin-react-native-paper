
import { AvatarDefaultProps, AvatarProps, BlueBaseImage, Icon, Text, } from '@bluebase/components';

import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';

export const Avatar = (props: AvatarProps) => {

	const { type, icon, color, size, image, text, style } = props;
	if (type === 'icon') {
		return (
			<MuiAvatar style={style} {...props}>
				<Icon name={icon} color={color} size={size} />
			</MuiAvatar>
		);
	}
	if (type === 'image') {
		return (
			<MuiAvatar style={style}  {...props}>
				<BlueBaseImage source={image} style={[{ height: size, width: size }, style]} />
			</MuiAvatar>
		);
	}

	return (
		<MuiAvatar style={style}  {...props}>
			<Text style={style}>{text}</Text>
		</MuiAvatar>
	);

};

Avatar.defaultProps = AvatarDefaultProps;
