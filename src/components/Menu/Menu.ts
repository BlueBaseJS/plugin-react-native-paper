import { componentMapper } from '@bluebase/component-mapper';
import { MenuDefaultProps, MenuProps } from '@bluebase/components';
import { Menu as RNMenu } from 'react-native-paper';

export const Menu = componentMapper<MenuProps>(
	RNMenu,
	{
		children: ({ children }: MenuProps) => children,
	},
	{ rest: true, defaultProps: MenuDefaultProps }
);
