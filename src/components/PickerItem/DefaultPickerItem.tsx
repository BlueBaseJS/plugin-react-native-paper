import { PickerItem, PickerItemProps } from '@bluebase/components';

import React from 'react';

export const DefaultPickerItem = ({ label, ...rest }: PickerItemProps) => (
	<option {...rest}>{label}</option>
	// <PickerItem label={label} {...rest} />
);
