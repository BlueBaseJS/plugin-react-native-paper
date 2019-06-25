import { List } from 'react-native-paper';
import { componentMapper } from '@bluebase/component-mapper';

export const ListItem = componentMapper(List.Item, {
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
	right: ({ right }) => () => right,
}, { rest: true });
