import { MenuItem, PickerItemProps } from '@bluebase/components';

import { PickerContextData } from '../Picker/PickerContext';
import React from 'react';

export const DropDownPickerItem = ({ label, ...rest }: PickerItemProps & PickerContextData) => {
	return <MenuItem {...rest} title={label} />;
};
