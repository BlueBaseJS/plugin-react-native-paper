import { Menu as RNPMenu, } from 'react-native-paper';
import { MenuProps, MenuDefaultProps } from '@bluebase/components';
import React from 'react';

export const Menu = (props: MenuProps) => (

	<RNPMenu
		anchor={props.anchor}
		style={props.style}
		onDismiss={props.onDismiss as any}
		visible={props.visible as any}
		{...props}
	>
		{props.children}
	</RNPMenu>
);

Menu.defaultProps = MenuDefaultProps;


