import MuiCard from '@material-ui/core/Card';
import React from 'react';

const Card = (props: any) => {

	return (

    <MuiCard {...props}>

      {props.children}
    </MuiCard>
	);
};

export { Card };