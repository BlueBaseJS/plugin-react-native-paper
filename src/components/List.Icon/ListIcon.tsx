/* eslint-disable react/jsx-no-bind */
import { Icon, ListIconProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import React from 'react';
import { TextStyle } from 'react-native';
import { List } from 'react-native-paper';

export interface ListIconStyles {
	root: TextStyle;
}

export const ListIcon = (props: ListIconProps & { styles: ListIconStyles }) => (
	<List.Icon
		icon={({ color, size }: any) => <Icon {...props} color={color} size={size} />}
		color={props.color || (props.styles.root.color as string)}
	/>
);

ListIcon.defaultStyles = (theme: Theme) => ({
	root: {
		color: theme.palette.action.active,
	},
});
