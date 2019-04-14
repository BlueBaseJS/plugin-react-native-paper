import MuiCardContent from '@material-ui/core/CardContent';

import React from 'react';

const CardContent = (props: any) => {

	return (

		<MuiCardContent {...props}>

			{props.children}
		</MuiCardContent>
	);
};

export { CardContent };