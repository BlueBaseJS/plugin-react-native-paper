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
	// 	<Picker
	// 		onValueChange={() => {}}
	// 		label="Language"
	// 		name="language"
	// 		id="language-simple"
	// 		mode="dropdown"
	// 		style={{ backgroundColor: 'red', width: 150 }}
	// 	>
	// 		<Picker.Item label="Java" value="java" />
	// 		<PickerItem label="Javaa1" value="java1" />
	// 		<ListItem title="ok" />
	// 		<ListItem title="ok1" />
	// 		<Picker.Item label="JavaScript" value="js" />
	// 		<Picker.Item label="PHP" value="php" />
	// 	</Picker>
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
				<ListItem title="ListItem" onPress={() => console.log('ListItem is clicked')} />
				<MenuItem title="MenuItem" onPress={() => console.log('MenuItem is clicked')} />
				<ListItem title="ok1" />
				<ListItem title="ok1" />
				<ListItem title="ok1" />
				<Picker.Item label="Java" value="java" color="red" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="PHP" value="php" />
				<Picker.Item label="PHP" value="php" />
				<Picker.Item label="PHP" value="php" />
				<Picker.Item label="PHP" value="php" />
				<Picker.Item label="PHP" value="php" />
				<Picker.Item label="PHP" value="php" />
				<Button title="Save" variant="contained" onPress={() => console.log('Button is clicked')} />
			</Picker>
		</SafeAreaView>
	));
// .add('default', () => (
// 	<Picker
// 		onValueChange={(value: any, data: any) => console.log(value, data)}
// 		label="Language"
// 		name="language"
// 		id="language-simple"
// 		mode="default"
// 		style={{ width: 100, backgroundColor: 'green' }}
// 	>
// 		<Picker.Item label="Java" value="java" />
// 		<Picker.Item label="JavaScript" value="js" />
// 		<Picker.Item label="PHP" value="php" />
// 	</Picker>
// ));
