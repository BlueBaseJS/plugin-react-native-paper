import { DynamicIcon, TabProps } from '@bluebase/components';
import MuiTab from '@material-ui/core/Tab';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const Tab = componentMapper<TabProps>(MuiTab, {
	icon: ({ icon }) => icon ? React.createElement(DynamicIcon, icon) : undefined
}, {
	rest: true
});

