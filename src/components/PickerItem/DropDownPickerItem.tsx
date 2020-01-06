import { MenuItem, PickerItemProps } from '@bluebase/components';

import React from 'react';

export const DropDownPickerItem = ({ label, ...rest }: PickerItemProps) => {
	return <MenuItem {...rest} title={label} />;
};
