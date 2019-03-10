import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';
import { withReactNativePaper } from './withReactNativePaper';

export default createPlugin({
	categories: ['ui'],
	description: 'React Native Paper comes to BlueBase!',
	key: 'react-native-paper',
	name: 'React Native Paper',
	version: '0.0.1',

	components: {},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withReactNativePaper);
			return bootOptions;
		}
	}
});
