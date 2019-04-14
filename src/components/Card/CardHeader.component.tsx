import MuiCardHeader from '@material-ui/core/CardHeader';

import React from 'react';

const CardHeader = (props: any) => {

	return (

        <MuiCardHeader subheader={props.description} avatar={props.left} actions={props.right} {...props} />

    );
};

export { CardHeader };