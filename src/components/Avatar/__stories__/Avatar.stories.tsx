import { AvatarProps, View } from '@bluebase/components';

import React from 'react';
import { ViewBase } from 'react-native';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const Avatar = getComponent<AvatarProps>('Avatar');

const stories = storiesOf('Avatar', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories.add('Simple Avatar ', () => (
	<Avatar
		type="image"
		image={{ uri: 'https://via.placeholder.com/300/09f.png%20C/O%20https://placeholder.com/' }}
	/>
));

stories.add('Simple Avatar with text prop ', () => <Avatar type="text" text={'AR'} />);
stories.add('Text Avatar Customized ', () => (
	<Avatar type="text" text="AR" style={{ backgroundColor: '#ddd' }} textStyle={{ color: 'red' }} />
));

stories.add('Simple Avatar with icon prop ', () => <Avatar type="icon" icon="facebook" />);

stories.add('Simple Avatar local images ', () => (
	<Avatar type="image" image={require('./download.png')} />
));

stories.add('Simple Avatar with style prop ', () => (
	<Avatar type="image" image={require('./download.png')} />
));

stories.add('Variants', () => (
	<>
		<View style={{ flexDirection: 'row' }}>
			<Avatar
				variant="square"
				type="image"
				image={{ uri: 'https://placeimg.com/100/100/any' }}
				style={{ margin: 4 }}
			/>
			<Avatar
				variant="rounded"
				type="image"
				image={{ uri: 'https://placeimg.com/100/100/any' }}
				style={{ margin: 4 }}
			/>
			<Avatar
				variant="circle"
				type="image"
				image={{ uri: 'https://placeimg.com/100/100/any' }}
				style={{ margin: 4 }}
			/>
		</View>
		<View style={{ flexDirection: 'row' }}>
			<Avatar variant="square" type="text" text="A" style={{ margin: 4 }} />
			<Avatar variant="rounded" type="text" text="B" style={{ margin: 4 }} />
			<Avatar variant="circle" type="text" text="C" style={{ margin: 4 }} />
		</View>
		<View style={{ flexDirection: 'row' }}>
			<Avatar variant="square" type="icon" icon="delete" style={{ margin: 4 }} />
			<Avatar variant="rounded" type="icon" icon="delete" style={{ margin: 4 }} />
			<Avatar variant="circle" type="icon" icon="delete" style={{ margin: 4 }} />
		</View>
	</>
));
