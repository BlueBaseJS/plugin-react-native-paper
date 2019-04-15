import { Avatar } from 'react-native-paper';
import React from 'react';

const AvatarComponent = (props: any) => {

	if (props.type === 'Icon') {
		return <Avatar.Icon {...props} />;
	}

	if (props.type === 'Text') {
		return <Avatar.Text {...props} />;
	}

	const ImageSource = props.image && props.image.uri ? { uri: props.image.uri } : props.image;

	return <Avatar.Image source={ImageSource} />;
};

export { AvatarComponent as Avatar };