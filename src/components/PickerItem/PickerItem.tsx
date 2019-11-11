import { PickerContext, PickerContextData } from '../Picker/PickerContext';

import { DefaultPickerItem } from './DefaultPickerItem';
import { DialogPickerItem } from './DialogPickerItem';
import { DropDownPickerItem } from './DropDownPickerItem';
import { PickerItemProps } from '@bluebase/components';
import React from 'react';

export const PickerItem = (props: PickerItemProps) => (
	<PickerContext.Consumer>
		{(ctx: PickerContextData) => {
			if (ctx.mode === 'default') {
				return <DefaultPickerItem {...ctx} {...props} />;
			}

			if (ctx.mode === 'dialog') {
				return <DialogPickerItem {...ctx} {...props} />;
			}

			return <DropDownPickerItem {...ctx} {...props} />;
		}}
	</PickerContext.Consumer>
);
