import { MenuItem, PickerItemProps } from '@bluebase/components';

import { DialogPickerContext } from '../Picker/DialogPicker';
import React from 'react';

export const DialogPickerItem = ({ label, ...rest }: PickerItemProps) => (
	<DialogPickerContext.Consumer>
		{({ setValue }) => <MenuItem {...rest} onPress={() => setValue(rest.value)} title={label} />}
	</DialogPickerContext.Consumer>
);
