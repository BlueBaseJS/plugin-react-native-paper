import { PickerComponent as Picker } from '../index';
import React from 'react';
import { View } from '@bluebase/components';
// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// const Picker = getComponent('PickerComponent');
storiesOf('Picker', module)
	.add('Modal Picker', () => (
		<View style={{ marginTop: 80 }}>
			<Picker
				styles={{ picker: {}, overlay: {}, actionSheetOverlay: {} }}
				label="enter label"
				selectedValue={'sample'}
				mode="modal"
				onValueChange={(value, i) => console.log('value', value)}
				items={[
					{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
					{ label: 'Jhon', value: 'Jhon' },
					{ label: 'Marry', value: 'Marry' },
				]}
			/>
		</View>
	))

	.add('Simple Picker ', () => (
		<View style={{ marginTop: 80 }}>
			<Picker
				mode={undefined}
				styles={{ picker: {}, overlay: {}, actionSheetOverlay: {} }}
				label="enter label"
				selectedValue={'sample'}
				onValueChange={(value, i) => console.log('value', value)}
				items={[
					{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
					{ label: 'Jhon', value: 'Jhon' },
					{ label: 'Marry', value: 'Marry' },
				]}
			/>
		</View>
	))

	.add('ActionSheet Picker ', () => (
		<View style={{ marginTop: 80 }}>
			<Picker
				styles={{ picker: {}, overlay: {}, actionSheetOverlay: {} }}
				label="enter label"
				selectedValue={'sample'}
				mode="actionsheet"
				onValueChange={(value, i) => console.log('value', value)}
				items={[
					{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
					{ label: 'Jhon', value: 'Jhon' },
					{ label: 'Marry', value: 'Marry' },
				]}
			/>
		</View>
	));
