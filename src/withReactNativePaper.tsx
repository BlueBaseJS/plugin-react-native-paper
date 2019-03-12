import { DefaultTheme, Provider } from 'react-native-paper';
import { ThemeConsumer, ThemeContextData } from '@bluebase/core';
import React from 'react';

// const theme = {
// 	...DefaultTheme,
// 	colors: {
// 		...DefaultTheme.colors,
// 		accent: 'yellow',
// 		primary: 'tomato',
// 	},
// };

export const withReactNativePaper = (Component: React.ComponentType<any>) => (props: any) => (
	<ThemeConsumer>
		{({ theme }: ThemeContextData) => {

			const rnpTheme = {
				...DefaultTheme,
				colors: {
					...DefaultTheme.colors,
					accent: theme.palette.secondary.main,
					background: theme.palette.background.default,
					disabled: theme.palette.text.disabled,
					placeholder: theme.palette.text.hint,
					primary: theme.palette.primary.main,
					surface: theme.palette.background.card,
					text: theme.palette.text.primary,
				},
				dark: theme.mode === 'dark' ? true : false,
				// roundness: theme.
			};

			return (
				<Provider theme={rnpTheme}>
					<Component {...props} />
				</Provider>
			);
		}}
	</ThemeConsumer>
);