import { Button, DialogProps, Image, View } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const Dialog = getComponent<DialogProps>('Dialog');
const Card = getComponent<DialogProps>('Card');

export interface Ipropsss {
	selectedValue: any;
	open: any;
	onClose: any;
}

export default class DialogComponent extends React.Component {
	public state: any = {
		visible: false,
	};

	public _hideDialog: any = () => this.setState({ visible: !this.state.visible });

	public render() {
		return (
			<>
				<Dialog visible={this.state.visible} onDismiss={this._hideDialog}>
					<Card style={{ height: 300 }} visible>
						<View style={{ display: 'flex', justifyContent: 'center' } as any}>
							<Image
								style={{ width: 308, height: 250 } as any}
								source={{ uri: 'https://placeimg.com/308/200/nature.png' }}
							/>
							<Button style={{ color: 'blue' }} onPress={this._hideDialog}>
								close
							</Button>
						</View>
					</Card>
				</Dialog>
				<Button style={{ marginTop: 200 }} onPress={this._hideDialog}>
					Open Dialog
				</Button>
			</>
		);
	}
}

storiesOf('Dialog', module).add('fullDialog component with all components props', () => (
	<DialogComponent />
));
