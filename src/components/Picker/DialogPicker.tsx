import { Dialog, List, PickerItem, PickerProps, ScrollView, View } from '@bluebase/components';
import React, { useState } from 'react';

import { PickerContext } from './PickerContext';

export interface DialogPickerProps extends PickerProps {
	mode: 'dialog';
}

export const DialogPicker = (props: DialogPickerProps) => {
	const { style, label, placeholder, onValueChange, mode, selectedValue } = props;

	const [dialogVisible, setDialogVisible] = useState(false);
	const toggleDialogVisible = () => setDialogVisible(!dialogVisible);

	const setValue = (value: any) => {
		if (onValueChange) {
			onValueChange(value, -1);
		}

		toggleDialogVisible();
	};

	return (
		<View style={style}>
			<PickerContext.Provider
				value={{
					mode,
					onValueChange: setValue,
					selectedValue,
				}}
			>
				<List.Item title={label} onPress={toggleDialogVisible} description={selectedValue} />
				<Dialog
					visible={dialogVisible}
					onDismiss={toggleDialogVisible}
					style={{ maxHeight: '70%' }}
				>
					<ScrollView>
						{placeholder ? <PickerItem value="" label={placeholder} disabled /> : null}
						{(props as any).children}
					</ScrollView>
				</Dialog>
			</PickerContext.Provider>
		</View>
	);
};
