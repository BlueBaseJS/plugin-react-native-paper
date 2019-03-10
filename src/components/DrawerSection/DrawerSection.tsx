import { DrawerSectionProps } from '@bluebase/components';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const DrawerSection = componentMapper<DrawerSectionProps>(List, {
	children: 'children',
	subheader: ({ title }: DrawerSectionProps) => title ? <ListSubheader>{title}</ListSubheader> : null
});

