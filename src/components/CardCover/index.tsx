import { BlueBaseImage, Icon, Text } from '@bluebase/components';
import React from 'react';


const CardCover = (props: any) => {
	const ImageSource = props.image && props.image.uri ? { uri: props.image.uri } : props.image;

	return (
		<BluebaseImage style={props.style} source={ImageSource} />
	);
};

export { CardCover };