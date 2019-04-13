import MuiMenuItem from '@material-ui/core/MenuItem';
import React from 'react';


const MenuItem = (props: any) => {
	return (
    <MuiMenuItem onClick={props.onDismiss} {...props}>
      {props.title}
    </MuiMenuItem>

	);
};
export { MenuItem };