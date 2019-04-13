import MuiMenu from '@material-ui/core/Menu';
import React from 'react';


const Menu = (props: any) => {
	return (
    <MuiMenu anchorEl={props.anchor} open={props.visible} onClose={props.onDismiss} {...props}>
      {props.children}
    </MuiMenu>

	);
};
export { Menu };