import { DefaultTheme, Provider } from 'react-native-paper';
import { ThemeContext, ThemeContextData } from '@bluebase/core';

import React from 'react';

export const withReactNativePaper = (Component: React.ComponentType<any>) => {
	return class ReactNativePaperProvider extends React.Component {
		static contextType: typeof ThemeContext = ThemeContext;

		render() {
			const { theme }: ThemeContextData = this.context;

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
				dark: theme.mode === 'dark',
				// roundness: theme.
			};

			return (
				<Provider theme={rnpTheme}>
					<Component {...this.props} />
				</Provider>
			);
		}
	};
};
