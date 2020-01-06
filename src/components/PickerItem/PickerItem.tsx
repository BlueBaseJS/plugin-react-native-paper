import React, { useContext } from 'react';

import { DefaultPickerItem } from './DefaultPickerItem';
import { DialogPickerItem } from './DialogPickerItem';
import { DropDownPickerItem } from './DropDownPickerItem';
import { PickerContext } from '../Picker/PickerContext';
import { PickerItemProps } from '@bluebase/components';

export const PickerItem = (props: PickerItemProps) => {
	const { mode } = useContext(PickerContext);

	if (mode === 'default') {
		return <DefaultPickerItem {...props} />;
	}

	if (mode === 'dialog') {
		return <DialogPickerItem {...props} />;
	}

	return <DropDownPickerItem {...props} />;
};
