import { ButtonProps } from '@bluebase/components';
import React from 'react';
import { View } from 'react-native';
// import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('Button', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories

	.add('Contained Buttons', () => (
		<React.Fragment>
			<Button variant="contained" onPress={() => console.log('Button onPress')}>
				Default
			</Button>
			<Button variant="contained" color="primary" onPress={() => console.log('Button onPress')}>
				Primary
			</Button>
			<Button variant="contained" color="secondary" onPress={() => console.log('Button onPress')}>
				Secondary
			</Button>
			<Button variant="contained" color="error" onPress={() => console.log('Button onPress')}>
				Error
			</Button>
			<Button variant="contained" color="warning" onPress={() => console.log('Button onPress')}>
				Warning
			</Button>
			<Button variant="contained" color="success" onPress={() => console.log('Button onPress')}>
				Success
			</Button>
			<Button
				variant="contained"
				color="secondary"
				disabled
				onPress={() => console.log('Button onPress')}
			>
				Disabled
			</Button>
			<Button variant="contained" onPress={() => console.log('Button onPress')}>
				Link
			</Button>
		</React.Fragment>
	))

	.add('Text Buttons', () => (
		<React.Fragment>
			<Button onPress={() => console.log('Button onPress')}>Default</Button>
			<Button color="primary" onPress={() => console.log('Button onPress')}>
				Primary
			</Button>
			<Button color="secondary" onPress={() => console.log('Button onPress')}>
				Secondary
			</Button>
			<Button color="error" onPress={() => console.log('Button onPress')}>
				Error
			</Button>
			<Button color="warning" onPress={() => console.log('Button onPress')}>
				Warning
			</Button>
			<Button color="success" onPress={() => console.log('Button onPress')}>
				Success
			</Button>
			<Button disabled onPress={() => console.log('Button onPress')}>
				Disabled
			</Button>
			<Button onPress={() => console.log('Button onPress')}>Link</Button>
		</React.Fragment>
	))

	.add('Outlined Buttons', () => (
		<React.Fragment>
			<Button variant="outlined" onPress={() => console.log('Button onPress')}>
				Default
			</Button>
			<Button variant="outlined" color="primary" onPress={() => console.log('Button onPress')}>
				Primary
			</Button>
			<Button variant="outlined" color="secondary" onPress={() => console.log('Button onPress')}>
				Secondary
			</Button>
			<Button variant="outlined" color="error" onPress={() => console.log('Button onPress')}>
				Error
			</Button>
			<Button variant="outlined" color="warning" onPress={() => console.log('Button onPress')}>
				Warning
			</Button>
			<Button variant="outlined" color="success" onPress={() => console.log('Button onPress')}>
				Success
			</Button>
			<Button variant="outlined" disabled onPress={() => console.log('Button onPress')}>
				Disabled
			</Button>
			<Button variant="outlined" onPress={() => console.log('Button onPress')}>
				Link
			</Button>
		</React.Fragment>
	))

	.add('Sizes', () => (
		<React.Fragment>
			<View>
				<Button size="small" onPress={() => console.log('Button onPress')}>
					Small
				</Button>
				<Button size="medium" onPress={() => console.log('Button onPress')}>
					Medium
				</Button>
				<Button size="large" onPress={() => console.log('Button onPress')}>
					Large
				</Button>
			</View>
			<View>
				<Button
					variant="outlined"
					size="small"
					color="primary"
					onPress={() => console.log('Button onPress')}
				>
					Small
				</Button>
				<Button
					variant="outlined"
					size="medium"
					color="primary"
					onPress={() => console.log('Button onPress')}
				>
					Medium
				</Button>
				<Button
					variant="outlined"
					size="large"
					color="primary"
					onPress={() => console.log('Button onPress')}
				>
					Large
				</Button>
			</View>
			<View>
				<Button
					variant="contained"
					size="small"
					color="primary"
					onPress={() => console.log('Button onPress')}
				>
					Small
				</Button>
				<Button
					variant="contained"
					size="medium"
					color="primary"
					onPress={() => console.log('Button onPress')}
				>
					Medium
				</Button>
				<Button
					variant="contained"
					size="large"
					color="primary"
					onPress={() => console.log('Button onPress')}
				>
					Large
				</Button>
			</View>
		</React.Fragment>
	))

	.add('width', () => (
		<View>
			<View style={{ padding: 8 }}>
				<Button variant="contained" color="primary" onPress={() => console.log('Button onPress')}>
					Normal
				</Button>
			</View>
			<View style={{ padding: 8 }}>
				<Button
					variant="contained"
					color="primary"
					fullWidth={true}
					onPress={() => console.log('Button onPress')}
				>
					Full Width
				</Button>
			</View>
		</View>
	))

	.add('Title', () => (
		<Button
			variant="contained"
			color="primary"
			fullWidth={true}
			onPress={() => console.log('Button onPress')}
			title="Button Title"
		/>
	))

	.add('Loading', () => (
		<React.Fragment>
			<Button
				variant="contained"
				color="primary"
				fullWidth={true}
				onPress={() => console.log('Button onPress')}
				title="Button Title"
				loading
			/>
			<Button
				variant="outlined"
				color="primary"
				fullWidth={true}
				onPress={() => console.log('Button onPress')}
				title="Button Title"
				loading
			/>
			<Button
				variant="text"
				color="primary"
				fullWidth={true}
				onPress={() => console.log('Button onPress')}
				title="Button Title"
				loading
			/>
			<Button
				variant="contained"
				color="primary"
				fullWidth={true}
				onPress={() => console.log('Button onPress')}
				title="Button Title"
				loading
				disabled
			/>
			<Button
				variant="outlined"
				color="primary"
				fullWidth={true}
				onPress={() => console.log('Button onPress')}
				title="Button Title"
				loading
				disabled
			/>
			<Button
				variant="text"
				color="primary"
				fullWidth={true}
				onPress={() => console.log('Button onPress')}
				title="Button Title"
				loading
				disabled
			/>
		</React.Fragment>
	));
