import { DrawerItemProps, Icon, IconProps } from '@bluebase/components';

import { Drawer } from 'react-native-paper';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const DrawerItem = componentMapper<DrawerItemProps>(Drawer.Item, {
	icon: ({ icon }: DrawerItemProps) => ({ color, size }: IconProps) => (
		<Icon
			{...icon}
			color={color}
			size={size}
		/>
	),
	label: 'title',
}, { rest: true });

