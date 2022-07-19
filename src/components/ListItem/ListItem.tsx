import { ListItemProps, View } from '@bluebase/components';
import React, { useCallback } from 'react';
import { List } from 'react-native-paper';
import { useTheme } from '@bluebase/core';

export const ListItem = (props: ListItemProps) => {
	const { selected, right, ...rest } = props;
	const { theme } = useTheme();

	const rightNode = useCallback(() => (
		<View style={{
			justifyContent: 'center',
			padding: theme.spacing.unit
		}}>
			{right}
		</View>
	), [right, theme.spacing.unit]);

	return (
		<List.Item
			{...rest as any}
			style={[
				selected && { backgroundColor: theme.palette.action.selected },
				props.style,
			]}
			right={right ? rightNode : undefined}
		/>
	);
};

ListItem.displayName = 'ListItem';
