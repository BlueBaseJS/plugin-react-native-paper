import MuiDialogActions from '@material-ui/core/DialogActions';
import React from 'react';

const DialogAction = (props: any) => {

	return (
    <MuiDialogActions {...props}>
      {props.children}
    </MuiDialogActions>
  );
};
export { DialogAction };

