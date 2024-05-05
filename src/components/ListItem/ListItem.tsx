import { Body2, ListItemProps, View } from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import React, { useCallback, useMemo } from 'react';
import { List } from 'react-native-paper';

export const ListItem = (props: ListItemProps) => {
	const { theme } = useTheme();
	const {
		selected,
		right,
		left,
		descriptionNumberOfLines,
		descriptionEllipsizeMode,
		descriptionStyle,
		...rest
	} = props;

	const rightNode = useMemo(() => !right ? right : () => (
		<View style={{
			justifyContent: 'center',
			padding: theme.spacing.unit
		}}
		>
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

	const renderDescription = useCallback(() => {
		if (typeof props.description === 'string') {
			return (
				<Body2
					selectable={false}
					numberOfLines={descriptionNumberOfLines}
					ellipsizeMode={descriptionEllipsizeMode}
					style={[
						{ color: theme.palette.text.secondary },
						descriptionStyle,
					]}
				>
					{props.description}
				</Body2>
			);
		}

		return props.description;
	}
	, [
		props.description,
		theme.palette.text.secondary,
		descriptionNumberOfLines,
		descriptionEllipsizeMode,
		descriptionStyle
	]);

	return (
		<List.Item
			{...rest as any}
			style={[
				selected && { backgroundColor: theme.palette.action.selected },
				props.style,
			]}
			description={renderDescription}
			left={leftNode}
			right={right ? rightNode : undefined}
		/>
	);
};

ListItem.displayName = 'ListItem';
