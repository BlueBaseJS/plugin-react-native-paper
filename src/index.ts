import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';
import { Button, Divider, TextInput } from './components';
import { withReactNativePaper } from './withReactNativePaper';

export default createPlugin({
	description: 'React Native Paper comes to BlueBase!',
	key: '@bluebase/plugin-react-native-paper',
	name: 'React Native Paper',
	version: '1.0.0',

	components: {
		Button,
		Divider,
		TextInput,
	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withReactNativePaper);
			return bootOptions;
		},
	},
});
