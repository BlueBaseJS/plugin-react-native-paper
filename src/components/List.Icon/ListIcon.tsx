import { List as L } from 'react-native-paper';
import { componentMapper } from '@bluebase/component-mapper';

export const ListIcon = componentMapper(L.Icon, {
	icon: 'name'
}, { rest: true });
