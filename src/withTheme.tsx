import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { ThemeContext, ThemeContextData } from '@bluebase/core';
import { I18nManager } from 'react-native';
import React from 'react';

export const withTheme = (Component: React.ComponentType<any>) => {

	return class ReactNativePaperProvider extends React.Component {
		static contextType = ThemeContext;

		render() {

			const { theme }: ThemeContextData = this.context;

			const rnpTheme = createMuiTheme({
				direction: I18nManager.isRTL ? 'rtl' : 'ltr',
				palette: {
					...theme.palette,
					action: theme.palette.action,
					background: {
						...theme.palette.background,
						paper: theme.palette.background.card
					},
					type: theme.mode
				},
				shape: theme.shape,
				spacing: theme.spacing,
				typography: theme.typography as any,
			});

			return (
				<MuiThemeProvider theme={rnpTheme}>
					<Component {...this.props} />
				</MuiThemeProvider>
			);
		}
	};
};