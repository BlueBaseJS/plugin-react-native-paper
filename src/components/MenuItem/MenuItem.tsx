import { Menu as RNPMenu } from 'react-native-paper';
import { MenuItemProps, MenuItemDefaultProps, DynamicIcon } from '@bluebase/components';
import React from 'react';
// import { Icon } from 'react-native-paper/typings/components/List';

export const MenuItem = (props: MenuItemProps) => {
	return (
		<RNPMenu.Item
			icon={props.icon as any}
			title={props.title}
			disabled={props.disabled}
			{...props}
		/>
	);
}


MenuItem.defaultProps = MenuItemDefaultProps;


