import {
	Avatar,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	Switch,
	TextInput,
} from './components';
import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

import { withReactNativePaper } from './withReactNativePaper';

export default createPlugin({
	description: 'React Native Paper comes to BlueBase!',
	key: '@bluebase/plugin-react-native-paper',
	name: 'React Native Paper',
	version: '1.0.0',

	components: {
		Avatar,
		Button,
		Checkbox,
		Divider,
		FormControlLabel,
		FormHelperText,
		Radio,
		RadioGroup,
		Switch,
		TextInput,
	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withReactNativePaper);
			return bootOptions;
		},
	},
});
