import { DynamicIcon } from '@bluebase/core/dist/components';
import { List } from 'react-native-paper';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';
export const ListIcon = componentMapper(List.Icon, {
	icon: () => (name:string, size:number) => <DynamicIcon   type="icon" name={name} size={size} />,
}, { rest: true });