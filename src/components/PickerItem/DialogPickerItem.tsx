import { MenuItem, PickerItemProps } from '@bluebase/components';

import { PickerContextData } from '../Picker/PickerContext';
import React from 'react';

export const DialogPickerItem = ({
	label,
	setValue,
	...rest
}: PickerItemProps & PickerContextData) => {
	const onPress = () => setValue(rest.value);
	return <MenuItem {...rest} onPress={onPress} title={label} />;
};
