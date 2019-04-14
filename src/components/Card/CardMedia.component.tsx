import MuiCardMedia from '@material-ui/core/CardMedia';
import React from 'react';

const CardMedia = () => {
	return (
		<MuiCardMedia
			style={{ width: 100, height: 100 }}
			src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
		// src={props.src}
		/>
	);


};

export { CardMedia };