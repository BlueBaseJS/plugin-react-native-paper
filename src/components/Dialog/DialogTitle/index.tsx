import MuiDialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';


const DialogTitle = (props: any) => {

	return (
    <MuiDialogTitle  {...props}>
      {props.children}
    </MuiDialogTitle>
  );

};
export { DialogTitle };