import { List } from 'react-native-paper';
import { componentMapper } from '@bluebase/component-mapper';

export const ListIcon = componentMapper(List.Icon, {
	icon: 'name'
}, { rest: true });
