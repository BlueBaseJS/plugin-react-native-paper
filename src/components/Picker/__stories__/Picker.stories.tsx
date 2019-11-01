import { Button, ListItem, Picker } from '@bluebase/components';

// const PickerItem = getComponent('PickerItem');
import { PickerItem } from '../../PickerItem';
import React from 'react';
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

	.add('dropdown', () => (
		<Picker
			onValueChange={() => {}}
			label="Language"
			name="language"
			id="language-simple"
			mode="dropdown"
			style={{ backgroundColor: 'red', width: 150 }}
		>
			<Picker.Item label="Java" value="java" />
			<PickerItem label="Javaa1" value="java1" />
			<ListItem title="ok" />
			<ListItem title="ok1" />
			<Picker.Item label="JavaScript" value="js" />
			<Picker.Item label="PHP" value="php" />
		</Picker>
	))

	.add('dialog', () => (
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
			<ListItem title="ok" />
			<ListItem title="ok1" />
			<Picker.Item label="JavaScript" value="js" />
			<Picker.Item label="PHP" value="php" />
			<Button title="Save" variant="contained" />
		</Picker>
	))
	.add('default', () => (
		<Picker
			onValueChange={() => console.log('<--Its ok-->')}
			label="Language"
			name="language"
			id="language-simple"
			mode="default"
			style={{ width: 100, backgroundColor: 'green' }}
		>
			<Picker.Item label="Java" value="java" />
			<ListItem title="ok" />
			<ListItem title="ok1" />
			<Picker.Item label="JavaScript" value="js" />
			<Picker.Item label="PHP" value="php" />
		</Picker>
	));
