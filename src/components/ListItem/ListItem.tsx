import { List } from 'react-native-paper';
import { componentMapper } from '@bluebase/component-mapper';

export const ListItem = componentMapper(List.Item, {
	left: ({ left }) => () => left,
	right: ({ right }) => () => right,
	subtitle: 'description',
}, { rest: true });
