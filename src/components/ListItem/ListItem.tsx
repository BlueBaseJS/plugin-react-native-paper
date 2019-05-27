import { List } from 'react-native-paper';
import { ListIcon } from '@bluebase/components';
import React from 'react';
// import { componentMapper } from '@bluebase/component-mapper';

// export const ListItem = componentMapper(List.Item, {
// 	description: 'description',
// 	left: ({ left }) => () => left,
// 	right: ({ right }) => () => right,
// }, { rest: true });

export const ListItem = (props: any) => {
	return (
		<List.Item
			left={props.inset ? () => <ListIcon name="" /> : () => props.left}
			right={props.right ? () => props.right : undefined}
			{...props}
		/>
	);
};
