import { DrawerActionsObject, DrawerActionsProps } from '@bluebase/components';
import React from 'react';

export const DrawerContext: React.Context<DrawerActionsObject> = React.createContext(
	undefined as any
);

export const DrawerActions = (props: DrawerActionsProps) =>
	React.createElement(DrawerContext.Consumer, props);
