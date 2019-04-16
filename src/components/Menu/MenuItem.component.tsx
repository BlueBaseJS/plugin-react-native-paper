import { MenuItemDefaultProps, MenuItemProps } from '@bluebase/components';
import MuiMenuItem from '@material-ui/core/MenuItem';
import { componentMapper } from '@bluebase/component-mapper';


// const MenuItem = (props: any) => {
// 	return (
//     <MuiMenuItem onClick={props.onDismiss} {...props}>
//       {props.title}
//     </MuiMenuItem>
// 	);
// };
// export { MenuItem };



export const MenuItem = componentMapper<MenuItemProps>(MuiMenuItem, {
	children: ({ title }: MenuItemProps) => title,
	onClick: 'onDismiss',
}, { rest: true, });

MenuItem.defaultProps = MenuItemDefaultProps;