import { DrawerItemProps, IconProps } from '@bluebase/components';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MUIListItem from '@material-ui/core/ListItem';
import React from 'react';
import { getComponent } from '@bluebase/core';

export const DrawerItem = (props: DrawerItemProps) => {

	const { active, disabled, icon, onPress, right, title } = props;
	const Icon = getComponent<IconProps>('Icon', 'Noop');

	return (
		<MUIListItem button={!!onPress} disabled={disabled} selected={active} onClick={onPress}>
			{icon ? <ListItemIcon><Icon {...icon} /></ListItemIcon> : null}
			{(title) ? <ListItemText inset={!!icon} primary={title} /> : null}
			{right}
		</MUIListItem>
	);
};
