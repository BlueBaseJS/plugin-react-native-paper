import { MenuItemDefaultProps, MenuItemProps } from '@bluebase/components';
import MuiMenuItem from '@material-ui/core/MenuItem';
import { componentMapper } from '@bluebase/component-mapper';

export const MenuItem = componentMapper<MenuItemProps>(MuiMenuItem, {
	children: ({ title }: MenuItemProps) => title,
	onClick: 'onDismiss',
}, { rest: true, });

MenuItem.defaultProps = MenuItemDefaultProps;