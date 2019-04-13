import MuiDialog from '@material-ui/core/Dialog';
import React from 'react';

const Dialog = (props: any) => {

	return (
		<MuiDialog {...props}>
			{props.children}
		</MuiDialog>
	);
};
export { Dialog };

