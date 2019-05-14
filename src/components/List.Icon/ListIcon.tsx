import { DynamicIcon, ListIconProps } from '@bluebase/components';

import React from 'react';

export const ListIcon = (props: ListIconProps) => (

	<DynamicIcon type="icon" name={props.name} size={props.size} />
	);

