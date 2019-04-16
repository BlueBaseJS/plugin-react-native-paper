import { MenuDefaultProps, MenuProps } from '@bluebase/components';

import MuiMenu from '@material-ui/core/Menu';
import { componentMapper } from '@bluebase/component-mapper';


export const Menu = componentMapper<MenuProps>(MuiMenu, {
	anchorEl: 'anchor',
	onClose: 'onDismiss',
	open: 'visible',

	children: ({ children }: MenuProps) => children,

}, { rest: true, defaultProps: MenuDefaultProps });
