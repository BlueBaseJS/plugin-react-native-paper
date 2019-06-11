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

// import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import { withPortal } from './withPortal';
import { withReactNativePaper } from './withReactNativePaper';

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
	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withReactNativePaper);
			BB.Components.addHocs('Navigation', withPortal);
			return bootOptions;
		},
	},
});
