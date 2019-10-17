import * as React from 'react';

import { Button, Menu, Provider } from 'react-native-paper';
import {
	Dialog,
	Divider,
	List,
	ListItem,
	Picker,
	ScrollView,
	Text,
	View,
} from '@bluebase/components';

import { Theme } from '@bluebase/core';
import { ViewStyle } from 'react-native';

export interface ItemsProps {
	value: string;
	label: string;
}
export interface PickerStyles {
	picker: ViewStyle;
	overlay: ViewStyle;
	actionSheetOverlay: ViewStyle;
}

export interface PickerProps {
	items: ItemsProps[];
	selectedValue: string;
	styles: PickerStyles;
	label: string;
	mode: 'dialog' | 'actionsheet' | 'default';
	onValueChange: (data: string, index: number) => void;
	left?: any;
	right?: any;
}

export interface PickerState {
	selectedValueIndex?: number;
	textStyle?: string;
	dialogVisible: boolean;
	selectedValue: string;
	selected?: string;
	visible: boolean;
}
export class PickerComponent extends React.Component<PickerProps, PickerState> {
	constructor(props: PickerProps) {
		super(props);

		this.state = {
			dialogVisible: false,
			selected: 'None',
			selectedValue: '',
			visible: false,
		};
	}

	static defaultStyles = (_theme: Theme) => ({
		actionSheetOverlay: {
			backgroundColor: 'rgba(0,0,0,0.5)',
			flex: 1,
			justifyContent: 'flex-end',
			width: null,
		},
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
			justifyContent: 'center',
			width: null,
		},
		picker: {
			backgroundColor: 'white',
			borderColor: '#aaa',
			borderTopWidth: 0.5,
			height: 250,
			padding: 10,
		},
	});

	_openMenu = () => this.setState({ visible: true });

	_closeMenu = () => this.setState({ visible: false });
	onValueChange = (data: string, index: number) => {
		this.setState({ dialogVisible: false, selectedValue: data, selected: data });
		this.props.onValueChange(data, index);
	};
	renderDropdownPicker = () => {
		const { items, label } = this.props;
		return (
			<Picker
				style={{ width: 200 }}
				selectedValue={this.state.selected}
				onValueChange={this.onValueChange}
				label={label}
				// required={true}
				// variant="standard"
				// mode="dropdown"
			>
				{items.map((item: { label: string; value: string }, i: number) => (
					<Picker.Item key={i} label={item.label} value={item.value} />
				))}
			</Picker>
		);
	};

	renderDialogPicker = () => {
		const { items, label, styles } = this.props;
		return (
			<>
				<View testID="list-id">
					<List>
						<List.Item
							title={label}
							description={<Text>{this.state.selected}</Text>}
							// right={<Icon name="arrow-down-thick" />}
							onPress={this.dialogHandler}
						/>
					</List>
				</View>
				<Dialog visible={this.state.dialogVisible} style={{ maxHeight: 350 }}>
					{/* <TouchableOpacity activeOpacity={1} onPress={this.dialogHandler}> */}
					<ScrollView>
						<View style={styles.picker}>
							{items.map((item: { label: string; value: string }, i: number) => (
								<List>
									<ListItem key={i} title={item.label} onPress={this.onPressHandler(i)} />
								</List>
							))}
						</View>
					</ScrollView>
					{/* </TouchableOpacity> */}
				</Dialog>
			</>
		);
	};
	onPressHandler = (id: number) => () => {
		this.props.items.map((item: { label: string; value: string }, i: number) => {
			if (id === i) {
				this.setState({ selected: item.label });
			}
		});
		this.dialogHandler();
	};

	renderPicker = () => {
		const picker = {
			actionsheet: this.renderDialogPicker(),
			default: this.renderDropdownPicker(),
			dialog: this.renderdialogPicker(),
		};

		return picker[this.props.mode];
	};
	renderdialogPicker = () => {
		// const { items, styles } = this.props;
		return (
			<Provider>
				<View
					style={{
						paddingTop: 50,
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<Menu
						visible={this.state.visible}
						onDismiss={this._closeMenu}
						anchor={<Button onPress={this._openMenu}>Show menu</Button>}
					>
						<Menu.Item onPress={() => {}} title="Item 1" />
						<Menu.Item onPress={() => {}} title="Item 2" />
						<Divider />
						<Menu.Item onPress={() => {}} title="Item 3" />
					</Menu>
				</View>
			</Provider>
			// <View style={{ backgroundColor: 'red', width: 180 }}>
			// 	<View>
			// 		<List>
			// 			<List.Item
			// 				title="This is Dialog"
			// 				description={<Text>{this.state.selected}</Text>}
			// 				onPress={this.dialogHandler}
			// 			/>
			// 		</List>
			// 	</View>

			// 	<Menu visible={this.state.dialogVisible}>
			// 		<TouchableOpacity activeOpacity={1} onPress={this.dialogHandler} style={styles.overlay}>
			// 			{items.map((item: { label: string; value: string }, i: number) => (
			// 				<List>
			// 					<ListItem
			// 						key={i}
			// 						title={item.label}
			// 						onPress={this.onPressHandler(i)}
			// 						style={styles.picker}
			// 					/>
			// 				</List>
			// 			))}
			// 		</TouchableOpacity>
			// 	</Menu>
			// </View>
		);
	};

	dialogHandler = () => {
		this.setState({ dialogVisible: !this.state.dialogVisible });
	};

	render() {
		const { mode } = this.props;
		return <>{mode ? this.renderPicker() : this.renderDropdownPicker()}</>;
	}
}
