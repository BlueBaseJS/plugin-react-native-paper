import { List } from 'react-native-paper';
import React from 'react';
import { Theme } from '@bluebase/core';
import { View } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const ListItem = componentMapper(
	List.Item,
	{
		/**
		 * We will be needing this change on upgrading to paper 2.16.0 above
		 */
		// description: ({ description }) => {
		// 	if (typeof description === 'string') {
		// 		return description;
		// 	}
		// 	return () => description;
		// },
		left: ({ left }) => () => left,
		right: ({ right, styles }) => () => (right ? <View style={styles.root}>{right}</View> : null),
	},
	{ rest: true, ignore: ['styles'] }
);

(ListItem as any).defaultStyles = (theme: Theme) => ({
	root: {
		justifyContent: 'center',
		padding: theme.spacing.unit,
	},
});
