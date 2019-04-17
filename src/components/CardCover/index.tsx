import { CardCoverProps, Image } from '@bluebase/components';

import React from 'react';


const CardCover = (props: CardCoverProps) => {
	const src: any = props.source;
	const ImageSource = src && src.uri ? { uri: src.uri } : src;

	return (
		<Image source={ImageSource} style={props.style as any}  {...props} />

	);
};

export { CardCover };