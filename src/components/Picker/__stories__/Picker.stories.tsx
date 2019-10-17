import { Icon, View } from '@bluebase/components';

import { PickerComponent as Picker } from '../index';
import React from 'react';
// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

// const Picker = getComponent('PickerComponent');
storiesOf('Picker', module)
	.add('Modal Picker', () => (
		<View style={{ marginTop: 80, width: 200 }}>
			<Picker
				styles={{ picker: {}, overlay: {}, actionSheetOverlay: {} }}
				label="enter label"
				selectedValue={'sample'}
				mode="dialog"
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

	.add('Dialog Picker ', () => (
		<View style={{ marginTop: 80, width: 200 }}>
			<Picker
				styles={{ picker: {}, overlay: {}, actionSheetOverlay: {} }}
				label="Select Person"
				selectedValue={'sample'}
				left={<Icon name="home" />}
				mode="actionsheet"
				onValueChange={(value, i) => console.log('value', value)}
				items={[
					{ label: 'SanPyaeLin', value: 'SanPyaeLin' },
					{ label: 'Jhon', value: 'Jhon' },
					{ label: 'Marry', value: 'Marry' },
					{ label: 'This is test', value: 'q' },
					{ label: 'Test is working fine', value: 'qp' },
					{ label: 'Test with jest', value: 'p' },
					{ label: 'Bluebase', value: 'w' },
					{ label: 'BB is cool', value: 'f' },
					{ label: 'BB stands for?', value: 'b' },
					{ label: 'BB for Bluebase', value: 'n' },
					{ label: 'Bluerain', value: 'm' },
					{ label: 'Mevris', value: 'a' },
					{ label: 'Make every thing smart', value: 's' },
				]}
			/>
		</View>
	));
