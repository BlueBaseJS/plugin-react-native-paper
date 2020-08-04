import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

import { components } from './components';
import { withPortal } from './withPortal';
import { withReactNativePaper } from './withReactNativePaper';

export default createPlugin({
	description: 'React Native Paper comes to BlueBase!',
	key: '@bluebase/plugin-react-native-paper',
	name: 'React Native Paper',
	version: '1.0.0',

	components,

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withReactNativePaper);
			BB.Components.addHocs('Navigation', withPortal);
			return bootOptions;
		},
	},
});
