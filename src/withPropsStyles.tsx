import { Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';

const { createElement, forwardRef } = React;

// Docs: https://github.com/mui-org/material-ui/issues/7633#issuecomment-418211698
export const withPropsStyles = ( style: any ) => {

	const withPropsStylesInternal = ( component: React.ComponentType<any> ) => {

		return forwardRef( (props, ref) => {

			const proxy = (theme: Theme) => style(props, theme);

			const hoc = withStyles(proxy)(component);

			return createElement(hoc, { ...props, ref }, props.children);
		});
	};

	return withPropsStylesInternal;
};
