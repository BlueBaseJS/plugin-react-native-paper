import { List } from 'react-native-paper';
import { componentMapper } from '@bluebase/component-mapper';

export const ListItem = componentMapper(List.Item, {
	description: 'description',
	left: ({ left }) => () => left,
	right: ({ right }) => () => right,
}, { rest: true });
