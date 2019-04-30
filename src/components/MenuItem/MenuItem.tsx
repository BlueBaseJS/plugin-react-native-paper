import { Menu as RNPMenu } from 'react-native-paper';
import { MenuItemProps, MenuItemDefaultProps } from '@bluebase/components';
import React from 'react';


export const MenuItem = (props: MenuItemProps) => (
	<RNPMenu.Item
			icon={props.icon as any}
			title={props.title}
			disabled={props.disabled}
			{...props}
		/>
)

MenuItem.defaultProps = MenuItemDefaultProps;


