import * as React from 'react';

import { List, Picker, Text, View, } from '@bluebase/components';
import { Modal, TouchableOpacity, ViewStyle } from 'react-native';

import { Theme } from '@bluebase/core';

export interface ItemsProps {
	value: string, label: string
}
export interface PickerStyles {
	picker: ViewStyle,
	overlay: ViewStyle
}



export interface PickerProps {
	items: ItemsProps[],
	selectedValue: string,
	styles: PickerStyles,
	label: string,
	mode: string;
	onValueChange: (data: string, index: number) => void
}

export interface PickerState {
	selectedValueIndex?: number
	textStyle?: string
	modalVisible?: boolean
	selectedValue: string
	selected?: string

}
export class PickerComponent extends React.PureComponent<PickerProps, PickerState> {
	constructor(props: PickerProps) {
		super(props);

		this.state = {
			modalVisible: false,
			selected: '',
			selectedValue: '',
		};
	}

	static defaultStyles = (_theme: Theme) => ({
		container: {
			backgroundColor: '#fff',
			borderColor: '#ddd',
			borderTopWidth: 0.5,
			justifyContent: 'center',
			minHeight: 40,
			padding: 5,
		},
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.5)',
			flex: 1,
			justifyContent: 'flex-end',
			width: null,
		},
		picker: {
			backgroundColor: 'white',
			borderColor: '#aaa',
			borderTopWidth: 0.5,
			padding: 10,
		},

	})

	onValueChange = (data: string, index: number) => {
		this.setState({ modalVisible: false, selectedValue: data, selected: data });
		this.props.onValueChange(data, index);
	}
	renderDropdownPicker = () => {
		const { items } = this.props;
		return (
			<Picker
				selectedValue={this.state.selected}
				onValueChange={this.onValueChange}
			>
				{
					items.map((item: { label: string, value: string }, i: number) =>
						<Picker.Item key={i} label={item.label} value={item.value} />
					)
				}
			</Picker>
		);
	}
	renderModalPicker = () => {
		const { items, label, styles } = this.props;
		return (
			<>
				<View testID="list-id">
					<List>
						<List.Item
							title={label}
							description={<Text>{this.state.selected}</Text>}
							onPress={this.dialogHandler}
						/>
					</List>
				</View>
				<Modal transparent visible={this.state.modalVisible} animationType="fade">
					<TouchableOpacity activeOpacity={1} onPress={this.dialogHandler} style={styles.overlay}>
						<View style={styles.picker}>

							<Picker
								selectedValue={this.state.selected}
								onValueChange={this.onValueChange}
							>
								{
									items.map((item: { label: string, value: string }, i: number) =>
										<Picker.Item key={i} label={item.label} value={item.value} />
									)
								}

							</Picker>
						</View>

					</TouchableOpacity>
				</Modal>
			</>
		);
	}

	dialogHandler = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	}

	render() {
		const { mode } = this.props;
		return (
			<>
				{mode === 'modal' ? this.renderModalPicker() : this.renderDropdownPicker()}
			</>
		);
	}
}

