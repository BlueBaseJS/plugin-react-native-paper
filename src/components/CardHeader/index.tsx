import { Card } from 'react-native-paper';
import { componentMapper } from '@bluebase/component-mapper';

export const CardHeader = componentMapper(Card.Title, {
	left: ({ left }) => () => left,
	right: ({ right }) => () => right,
	subtitle: 'description',
}, { rest: true });
