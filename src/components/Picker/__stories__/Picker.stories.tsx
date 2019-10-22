import { Icon, View } from '@bluebase/components';

// const Picker = getComponent('PickerComponent');
import { PickerComponent as Picker } from '../Picker.native';
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const PickerItem = getComponent('BBPickerItem');
storiesOf('Picker', module)
	.add('Menu Picker', () => (
		<View style={{ marginTop: 80, width: 200 }}>
			<Picker
				label="Select One"
				mode="menu"
				selectedValue={'sample'}
				onValueChange={(value, i) => console.log('value---->', value, 'index---->', i)}
			>
				<PickerItem label="Ok" value="0" />
				<PickerItem label="Ok1" value="1" />
				<PickerItem label="Ok2" value="2" />
				<PickerItem label="Ok3" value="3" />
			</Picker>
		</View>
	))

	.add('Simple Picker ', () => (
		<View style={{ marginTop: 80 }}>
			<Picker
				mode={undefined}
				styles={{ picker: {}, overlay: {}, actionSheetOverlay: {} }}
				label="enter label"
				selectedValue={'sample'}
				onValueChange={(value, i) => console.log('value---->', value, 'index---->', i)}
			>
				<PickerItem label="Ok" value="0" />
				<PickerItem label="Ok1" value="1" />
				<PickerItem label="Ok2" value="2" />
				<PickerItem label="Ok3" value="3" />
			</Picker>
		</View>
	))

	.add('Dialog Picker ', () => (
		<View style={{ marginTop: 80, width: 200 }}>
			<Picker
				styles={{ picker: {}, overlay: {}, actionSheetOverlay: {} }}
				label="Select Person"
				selectedValue={'sample'}
				mode="dialog"
				onValueChange={(value, i) => console.log('value---->', value, 'index---->', i)}
			>
				<PickerItem label="Ok" value="0" />
				<PickerItem label="Ok1" value="1" />
				<PickerItem label="Ok2" value="2" />
				<PickerItem label="Ok3" value="3" />
			</Picker>
		</View>
	));
