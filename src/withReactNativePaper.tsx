import { DefaultTheme, Provider } from 'react-native-paper';
import { ThemeContext, ThemeContextData } from '@bluebase/core';
import React from 'react';

const { Font } = require('expo');

export const withReactNativePaper = (Component: React.ComponentType<any>) => {

	return class ReactNativePaperProvider extends React.Component {
		static contextType = ThemeContext;

		readonly state = {
			isFontLoaded: false
		};

		async componentWillMount() {
			await Font.loadAsync({ 'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf') });
			this.setState({ isFontLoaded: true });
		}

		render() {
			if (!this.state.isFontLoaded) {
				return null;
			}

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
				dark: theme.mode === 'dark' ? true : false,
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