import { PickerContextData } from '../Picker/PickerContext';
import { PickerItemProps } from '@bluebase/components';
import React from 'react';

export const DefaultPickerItem = ({ label, ...rest }: PickerItemProps & PickerContextData) => (
	<option {...rest}>{label}</option>
);
