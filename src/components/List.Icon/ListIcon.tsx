import { DynamicIcon } from '@bluebase/core/dist/components';
import React from 'react';

export const ListIcon = (props: any) => {

	return (
		<DynamicIcon type="icon" name={props.name} size={props.size} />
	);
};