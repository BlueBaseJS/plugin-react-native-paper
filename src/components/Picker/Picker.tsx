import { List, Picker, Text, View } from '@bluebase/components';
import { Modal, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export interface IOSPickerProps {
	items: [],
	selectedValue: string,
	style?: object,
	label: string,
	onValueChange: (data: object, index: number) => void
}

export interface IOSPickerState {
	selectedValueIndex?: number
	textStyle?: string
	modalVisible?: boolean
	selectedValue: string
	selected?: number

}
class PickerComponent extends Component<IOSPickerProps, IOSPickerState> {
	constructor(props: any) {
		super(props);

		this.state = {
			modalVisible: false,
			selectedValue: '',
			selected: 0,
		};
	}

	componentWillReceiveProps(nextProps: IOSPickerProps) {
		if (this.props.items == null && nextProps.selectedValue != this.state.selectedValue) {
			this.setState({
				selectedValue: nextProps.selectedValue,
			});
		}
	}

	pressItem = () => {
		this.setState({ modalVisible: true });
	}

	valueChange = (data: any, index: any) => {
		this.setState({ modalVisible: false, selectedValue: data, selected: data });
		this.props.onValueChange(data, index);
	}


	DialogHandler = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	}


	render = () => {
		const { children, items, label } = this.props;
		return (
			<>
				<List>
					<List.Item

						title={label}
						description={<Text>{this.state.selected}</Text>}
						onPress={this.DialogHandler}
					/>

				</List>
				<Modal
					transparent={false}
					animationType="slide"
					visible={this.state.modalVisible}>
					<TouchableOpacity activeOpacity={1} onPress={this.DialogHandler} >
						<View >
							<Picker
								selectedValue={this.state.selected}
								onValueChange={this.valueChange as any}
							>
								{
									items.map((item: { label: string, value: string }, i: number) =>
										<Picker.Item key={i} label={item.label} value={item.value} />
									)
								}
								{children}
							</Picker>
						</View>
					</TouchableOpacity>
				</Modal>
			</>
		);
	}
}

export { PickerComponent as Picker };

