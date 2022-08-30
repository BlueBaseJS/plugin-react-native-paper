import { ListItemProps, View } from '@bluebase/components';
import React, { useMemo } from 'react';
import { List } from 'react-native-paper';
import { useTheme } from '@bluebase/core';

export const ListItem = (props: ListItemProps) => {
	const { selected, right, left, ...rest } = props;
	const { theme } = useTheme();

	const rightNode = useMemo(() => !right ? right : () => (
		<View style={{
			justifyContent: 'center',
			padding: theme.spacing.unit
		}}>
			{right}
		</View>
	), [right, theme.spacing.unit]);

	const leftNode = useMemo(() => {

		if (!left) {
			return null;
		}

		if (typeof left === 'function') {
			return left;
		}

		return () => left;
	}, [left]);

	return (
		<List.Item
			{...rest as any}
			style={[
				selected && { backgroundColor: theme.palette.action.selected },
				props.style,
			]}
			left={leftNode}
			right={right ? rightNode : undefined}
		/>
	);
};

ListItem.displayName = 'ListItem';
