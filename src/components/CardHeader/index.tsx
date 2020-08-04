import { Card } from 'react-native-paper';
import { CardHeaderProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const CardHeader = componentMapper(
	Card.Title,
	{
		left: ({ left }: CardHeaderProps) => () => left,
		right: ({ right }: CardHeaderProps) => () => right,
		subtitle: 'description',
	},
	{ rest: true }
);
