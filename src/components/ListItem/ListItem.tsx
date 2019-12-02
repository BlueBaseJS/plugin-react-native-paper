import { List } from 'react-native-paper';
import React from 'react';
import { Theme } from '@bluebase/core';
import { View } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const ListItem = componentMapper(
	List.Item,
	{
		descriptionNumberOfLines: () => null,
		left: ({ left }) => () => left,
		right: ({ right, styles }) => () => (right ? <View style={styles.root}>{right}</View> : null),
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
