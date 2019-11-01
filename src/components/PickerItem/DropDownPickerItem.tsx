import { MenuItem, PickerItemProps } from '@bluebase/components';

import React from 'react';

export const DropDownPickerItem = ({ label, ...rest }: PickerItemProps) => {
	console.log(label);
	return <MenuItem {...rest} title={label} />;
};
