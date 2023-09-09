import { componentMapper } from '@bluebase/component-mapper';
import { DrawerItemProps, Icon, IconProps } from '@bluebase/components';
import React from 'react';
import { Drawer } from 'react-native-paper';

export const DrawerItem = componentMapper<DrawerItemProps>(
	Drawer.Item,
	{
		icon: ({ icon }: DrawerItemProps) => ({ color, size }: IconProps) => (
			<Icon {...icon} color={color} size={size} />
		),
		label: 'title',
	},
	{ rest: true }
);
