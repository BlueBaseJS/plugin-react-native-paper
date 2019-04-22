import { Avatar } from 'react-native-paper';
import { AvatarProps } from '@bluebase/components';
import React from 'react';

const AvatarComponent = (props: AvatarProps) => {

	if (props.type === 'icon' && props.icon !== undefined) {
		return <Avatar.Icon icon={props.icon} {...props} />;
	}

	if (props.type === 'text' && props.text !== undefined) {
		return <Avatar.Text label={props.text} {...props} />;
	}

	if (props.type === 'image' && props.image !== undefined) {
		return <Avatar.Image source={props.image as any} {...props} />;
	}
	return null;
};

export { AvatarComponent as Avatar };