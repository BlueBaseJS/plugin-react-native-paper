import { Button, ListItem, MenuItem, Picker } from '@bluebase/components';

// const PickerItem = getComponent('PickerItem');
import { PickerItem } from '../../PickerItem';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { getComponent } from '@bluebase/core';
// import { action } from '@storybook/addon-actions';
// import { action } from '@storybook/addon-actions';
import storiesOf from '@bluebase/storybook-addon';

// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Picker', module);
// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories

	// .add('dropdown', () => (
	// 	<SafeAreaView>
	// 		<Picker
	// 			onValueChange={() => {}}
	// 			label="Language"
	// 			name="language"
	// 			id="language-simple"
	// 			mode="dropdown"
	// 			style={{ backgroundColor: 'red', width: 150 }}
	// 		>
	// 			<Picker.Item label="Java" value="java" />
	// 			<Picker.Item label="JavaScript" value="js" />
	// 			<Picker.Item label="PHP" value="php" />
	// 		</Picker>
	// 	</SafeAreaView>
	// ))

	.add('dialog', () => (
		<SafeAreaView>
			<Picker
				onValueChange={() => console.log('<--Its ok-->')}
				label="Language"
				name="language"
				id="language-simple"
				placeholder="PlaceHolder"
				mode="dialog"
				// style={{ width: 100, backgroundColor: 'green' }}
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		</SafeAreaView>
	))
	.add('default', () => (
		<SafeAreaView>
			<Picker
				onValueChange={(value: any, data: any) => console.log(value, data)}
				label="Language"
				name="language"
				id="language-simple"
				mode="default"
				style={{ width: 100, backgroundColor: 'green' }}
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
			</Picker>
		</SafeAreaView>
	));
