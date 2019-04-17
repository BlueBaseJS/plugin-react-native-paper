import { Image } from '@bluebase/components';
import React from 'react';


const CardCover = (props: any) => {
	const ImageSource = props.source && props.source.uri ? { uri: props.source.uri } : props.source;

	return (
		<Image source={ImageSource} style={props.style as any}  {...props} />

	);
};

export { CardCover };