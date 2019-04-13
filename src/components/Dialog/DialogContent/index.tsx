import MuiDialogContent from '@material-ui/core/DialogContent';
import React from 'react';

const DialogContent = (props: any) => {

	return (
		<MuiDialogContent {...props}>
			{props.children}
		</MuiDialogContent>
	);
};
export { DialogContent };

