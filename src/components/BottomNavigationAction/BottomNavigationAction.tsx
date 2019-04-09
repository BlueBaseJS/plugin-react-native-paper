import { BottomNavigationActionProps, DynamicIcon } from '@bluebase/components';
import MuiBottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const BottomNavigationAction = componentMapper<BottomNavigationActionProps>(MuiBottomNavigationAction, {
	icon: ({ icon }) => icon ? React.createElement(DynamicIcon, icon) : undefined
}, {
	rest: true
});

