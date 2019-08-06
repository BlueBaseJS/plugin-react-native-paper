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
			selectedValue: '',
			selected: '',
		};
	}

	componentWillReceiveProps(props: any) {
		console.log('props', props);


	}

	static defaultStyles = (_theme: Theme) => ({
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



	valueChange = (data: string, index: number) => {
		this.setState({ modalVisible: false, selectedValue: data, selected: data });
		this.props.onValueChange(data, index);
	}


	DialogHandler = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	}


	render = () => {

		const { children, items, label, styles } = this.props;
		console.log('items', items);
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

					<TouchableOpacity activeOpacity={1} onPress={this.DialogHandler} style={styles.overlay}>
						<View style={styles.picker}>

							<Picker
								selectedValue={this.state.selected}
								onValueChange={this.valueChange}
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

