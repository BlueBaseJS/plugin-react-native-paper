import { componentMapper } from '@bluebase/component-mapper';
import { MenuItemDefaultProps, MenuItemProps } from '@bluebase/components';
import { Menu as RNMenu } from 'react-native-paper';

export const MenuItem = componentMapper<MenuItemProps>(
	RNMenu.Item,
	{
		children: ({ title }: MenuItemProps) => title,
		onPress: 'onDismiss',
	},
	{ rest: true }
);

MenuItem.defaultProps = MenuItemDefaultProps;
