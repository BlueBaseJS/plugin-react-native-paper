import { PickerItemProps } from '@bluebase/components';
import React from 'react';

export const PickerItem = ({ label, ...rest }: PickerItemProps) => (
	<option {...rest}>{label}</option>
);