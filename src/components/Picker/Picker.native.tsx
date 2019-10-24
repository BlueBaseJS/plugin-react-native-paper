import * as React from 'react';

import {
	Dialog,
	List,
	ListItem,
	Menu,
	MenuItem,
	Picker,
	ScrollView,
	View,
} from '@bluebase/components';
import { StyleProp, ViewStyle } from 'react-native';

export interface ItemsProps {
	value: string;
	label: string;
}

export interface PickerProps {
	label: string;
	mode: 'dialog' | 'menu' | 'default';
	onValueChange: (data: string, index: number) => void;
	children: any;
	style?: StyleProp<ViewStyle>;
}

export interface PickerState {
	pickerVisible: boolean;
	selected: string;
	selectedIndex: number;
	items: any;
}
export class PickerComponent extends React.Component<PickerProps, PickerState> {
	initialDataSet: boolean;
	constructor(props: PickerProps) {
		super(props);
		this.state = {
			items: [],
			pickerVisible: false,
			selected: 'None',
			selectedIndex: -1,
		};
		this.initialDataSet = false;
	}
	_onPressHandler = (id: number, data: any) => () => {
		data.map((item: { label: string; value: string }, i: number) => {
			if (id === i) {
				this.setState({ selected: item.label, selectedIndex: i }, () =>
					this.props.onValueChange(this.state.selected, this.state.selectedIndex)
				);
			}
		});
		this._pickerHandler();
	}

	_renderPicker = () => {
		const picker = {
			default: this._renderDropdownPicker(),
			dialog: this._renderDialogPicker(),
			menu: this._renderMenuPicker(),
		};

		return picker[this.props.mode];
	}

	_pickerHandler = () => {
		this.setState({
			pickerVisible: !this.state.pickerVisible,
		});
	}

	_openMenu = () => this.setState({ pickerVisible: !this.state.pickerVisible });

	_closeMenu = () => this.setState({ pickerVisible: !this.state.pickerVisible });

	_onValueChange = (data: string, index: number) => {
		this.setState({
			pickerVisible: !this.state.pickerVisible,
			selected: data,
		});
		this.props.onValueChange(data, index);
	}

	_renderDropdownPicker = () => {
		const { label } = this.props;
		const { items } = this.state;
		return (
			<Picker
				style={{ width: 200 }}
				selectedValue={this.state.selected}
				onValueChange={this._onValueChange}
				label={label}
			>
				{items.map((item: { label: string; value: string }, i: number) => (
					<Picker.Item key={i} label={item.label} value={item.value} />
				))}
			</Picker>
		);
	}

	_renderDialogPicker = () => {
		const { label } = this.props;
		const { items } = this.state;
		return (
			<>
				<View testID="list-id">
					<List>
						<List.Item
							title={label}
							onPress={this._pickerHandler}
							description={this.state.selected}
						/>
					</List>
				</View>
				<Dialog
					visible={this.state.pickerVisible}
					style={{ maxHeight: '40%' }}
					onDismiss={this._pickerHandler}
				>
					<ScrollView>
						<View>
							{items.map((item: { label: string; value: string }, i: number) => (
								<List>
									<ListItem key={i} title={item.label} onPress={this._onPressHandler(i, items)} />
								</List>
							))}
						</View>
					</ScrollView>
				</Dialog>
			</>
		);
	}

	_renderMenuPicker = () => {
		const { label } = this.props;
		const { items } = this.state;
		return (
			<View>
				<Menu
					style={{ maxHeight: '100%' }}
					visible={this.state.pickerVisible}
					anchor={
						<List>
							<List.Item title={label} onPress={this._openMenu} description={this.state.selected} />
						</List>
					}
					onDismiss={this._closeMenu}
				>
					<ScrollView>
						{items.map((item: { label: string; value: string }, i: number) => (
							<MenuItem
								key={item.value}
								title={item.label}
								onPress={this._onPressHandler(i, items)}
							/>
						))}
					</ScrollView>
				</Menu>
			</View>
		);
	}

	render() {
		const { mode, children } = this.props;
		const items: any = [];
		children.map((item: any) => {
			items.push(item.props);
		});
		if (!this.initialDataSet) {
			this.initialDataSet = true;
			this.setState({ items: items });
		}
		return <>{mode ? this._renderPicker() : this._renderDropdownPicker()}</>;
	}
}
