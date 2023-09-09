import { componentMapper } from '@bluebase/component-mapper';
import { CardHeaderProps } from '@bluebase/components';
import { Card } from 'react-native-paper';

export const CardHeader = componentMapper(
	Card.Title,
	{
		left: ({ left }: CardHeaderProps) => () => left,
		right: ({ right }: CardHeaderProps) => () => right,
		subtitle: 'description',
	},
	{ rest: true }
);
