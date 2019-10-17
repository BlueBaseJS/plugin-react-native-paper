import { MenuDefaultProps, MenuProps } from '@bluebase/components';

import { Menu as RNMenu } from 'react-native-paper';
import { componentMapper } from '@bluebase/component-mapper';

export const Menu = componentMapper<MenuProps>(
	RNMenu,
	{
		children: ({ children }: MenuProps) => children,
	},
	{ rest: true, defaultProps: MenuDefaultProps }
);
