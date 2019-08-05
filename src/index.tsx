import * as React from "react"

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardCover,
	CardHeader,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	DrawerItem,
	DrawerSection,
	FormControlLabel,
	FormHelperText,
	IconButton,
	List,
	ListIcon,
	ListItem,
	ListSubheader,
	Picker,
	Radio,
	RadioGroup,
	Switch,
	Table,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	TableTitle,
	TextInput,
} from './components';
import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

import { withPortal } from './withPortal';
import { withReactNativePaper } from './withReactNativePaper';

// TODO: This is a temp fix for:
// https://github.com/react-native-community/cli/issues/228
// import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
// tslint:disable-next-line: no-var-requires
const MaterialIcons = require('../Fonts/MaterialIcons.ttf');

export default createPlugin({
	description: 'React Native Paper comes to BlueBase!',
	key: '@bluebase/plugin-react-native-paper',
	name: 'React Native Paper',
	version: '1.0.0',

	assets: {
		'Material Icons': MaterialIcons,
	},

	components: {
		Avatar,
		Button,
		Card,
		CardActions,
		CardContent,
		CardCover,
		CardHeader,
		Checkbox,
		Dialog,
		DialogActions,
		DialogContent,
		DialogTitle,
		Divider,
		DrawerItem,
		DrawerSection,
		FormControlLabel,
		FormHelperText,
		IconButton,
		List,
		ListAvatar: Avatar,
		ListIcon,
		ListItem,
		ListSubheader,
		Radio,
		RadioGroup,
		Switch,
		Table,
		TableCell,
		TableHead,
		TablePagination,
		TableRow,
		TableTitle,
		TextInput,
		'HomeScreen': () => <Picker
			selectedValue={''}
			onValueChange={(value, i) => console.log('value', value)}
			items={[{ name: 'SanPyaeLin', code: '22' }, { name: 'Jhon', code: '1' }, { name: 'Marry', code: '2' }]}
		/>

	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withReactNativePaper);
			BB.Components.addHocs('Navigation', withPortal);
			return bootOptions;
		},
	},
});
