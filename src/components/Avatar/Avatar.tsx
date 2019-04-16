
import { BlueBaseImage, Icon, Text, AvatarProps, AvatarDefaultProps } from '@bluebase/components';

import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';

export const Avatar = (props: AvatarProps) => {

	const { type, icon, color, size, image, text, style } = props;
	if (type === 'icon') {
		return (
			<MuiAvatar style={style as any}  {...props}>
				<Icon name={icon} color={color} size={size} />
			</MuiAvatar>
		);
	}
	if (type === 'image') {
		const Image: any = image;
		const ImageSource = Image && Image.uri ? { uri: Image.uri } : props.image;
		return (
			<MuiAvatar style={style as any}  {...props}>
				<BlueBaseImage source={ImageSource} style={style as any} />
			</MuiAvatar>
		);
	}

	return (
		<MuiAvatar style={style as any}  {...props}>
			<Text style={style}>{text}</Text>
		</MuiAvatar>
	);

};

Avatar.defaultProps = AvatarDefaultProps;
