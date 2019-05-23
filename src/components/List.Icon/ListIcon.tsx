import { Icon, ListIconProps } from '@bluebase/components';

import { List } from 'react-native-paper';
import React from 'react';
import { TextStyle } from 'react-native';
import { Theme } from '@bluebase/core';

export interface ListIconStyles {
	root: TextStyle;
}

export const ListIcon = (props: ListIconProps & { styles: ListIconStyles }) => (
	<List.Icon
		// tslint:disable-next-line: jsx-no-lambda
		icon={({ color, size }) => <Icon {...props} color={color} size={size} />}
		// size={props.size}
		color={props.color || (props.styles.root.color as string)}
	/>
);

ListIcon.defaultStyles = (theme: Theme) => ({
	root: {
		color: theme.palette.action.active,
	},
});
