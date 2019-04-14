import MuiCardActions from '@material-ui/core/CardActions';
import React from 'react';


const CardActions = (props: any) => {

	return (

		<MuiCardActions {...props}>

			{props.children}
		</MuiCardActions>
	);
};

export { CardActions };