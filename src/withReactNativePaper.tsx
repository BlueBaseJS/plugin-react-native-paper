import { DefaultTheme, Provider } from 'react-native-paper';
import React from 'react';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		accent: 'yellow',
		primary: 'tomato',
	},
};

export const withReactNativePaper = (Component: React.ComponentType<any>) => (props: any) => (
	<Provider theme={theme}>
		<Component {...props} />
	</Provider>
);