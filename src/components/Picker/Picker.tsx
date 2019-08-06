import { List, Picker, Text, View } from '@bluebase/components';
import { Modal, StyleSheet, TouchableOpacity } from 'react-native';
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
				<Modal transparent visible={this.state.modalVisible} animationType='fade'>

					<TouchableOpacity activeOpacity={1} onPress={this.DialogHandler} style={defaultStyles.overlay}>
						<View style={defaultStyles.picker}>

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


const defaultStyles = StyleSheet.create({
	container: {
		padding: 5,
		minHeight: 40,
		borderTopWidth: 0.5,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	overlay: {
		flex: 1,
		width: null,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	picker: {
		padding: 10,
		borderTopWidth: 0.5,
		borderColor: '#aaa',
		backgroundColor: 'white'
	},
	picker2: {
		backgroundColor: 'white'
	}
});
export { PickerComponent as Picker };

