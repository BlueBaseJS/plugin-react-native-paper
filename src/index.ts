import { Divider } from './components/Divider';
import { DrawerItem } from './components/DrawerItem';
import { DrawerSection } from './components/DrawerSection';
import { ListItem } from './components/ListItem';
import { ListSection } from './components/ListSection';
import { ListSubheader } from './components/ListSubheader';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	categories: ['ui'],
	description: 'Material UI (web) comes to BlueBase!',
	key: 'material-ui',
	name: 'Material UI',
	version: '0.0.1',

	components: {
		Divider,
		DrawerItem,
		DrawerSection,
		ListItem,
		ListSection,
		ListSubheader,
	},
});
