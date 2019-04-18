import { Drawer } from 'react-native-paper';
import { DrawerItemProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const DrawerItem = componentMapper<DrawerItemProps>(Drawer.Item, {
	icon: ({ icon }: DrawerItemProps) => icon && icon.name,
	label: 'title',
}, { rest: true });

