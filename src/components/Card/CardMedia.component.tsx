import MuiCardMedia from '@material-ui/core/CardMedia';
import React from 'react';

const CardMedia = (props: any) => {

	return (

    <MuiCardMedia image={props.source}{...props} />
  );
};

export { CardMedia };