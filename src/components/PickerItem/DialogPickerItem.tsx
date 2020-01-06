import { MenuItem, PickerItemProps } from '@bluebase/components';
import React, { useContext } from 'react';

import { PickerContext } from '../Picker/PickerContext';

export const DialogPickerItem = (props: PickerItemProps) => {
	const { onValueChange } = useContext(PickerContext);
	const onPress = () => onValueChange(props.value, -1);

	return <MenuItem {...props} onPress={onPress} title={props.label} />;
};
