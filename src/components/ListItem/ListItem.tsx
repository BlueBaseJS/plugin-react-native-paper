import { ListItemProps, View } from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import { List } from 'react-native-paper';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const selectListItem = (props: any) => {
	const styles = useStyles('ChartCard', props, {
		background: {
			backgroundColor: 'rgb(166, 166, 166)',
		},
	});

	const { selected, ...rest } = props;
	if (selected) return <List.Item {...rest} style={styles.background} />;
	return <List.Item {...rest} />;
};

export const ListItem = componentMapper(
	selectListItem,
	{
		descriptionNumberOfLines: () => null,
		left: ({ left }: ListItemProps) => () => left,
		right: ({ right, styles }: ListItemProps & any) => () =>
			right ? <View style={styles.root}>{right}</View> : null,
		titleNumberOfLines: () => null,
	},
	{ rest: true, ignore: ['styles'] }
);

(ListItem as any).defaultStyles = (theme: Theme) => ({
	root: {
		justifyContent: 'center',
		padding: theme.spacing.unit,
	},
});
