import { Dialog, List, PickerDefaultProps, PickerItem, View } from '@bluebase/components';
import React, { createContext } from 'react';

import { ScrollView } from 'react-native';

export interface DialogPickerState {
	value?: any;
	visible: boolean;
	setValue: (value: any) => void;
	onValueChange: (value: any, index: number) => void;
}

export const DialogPickerContext: React.Context<DialogPickerState> = createContext(
	undefined as any
);

export class DialogPicker extends React.PureComponent<any, DialogPickerState> {
	static defaultProps = {
		...PickerDefaultProps,
		PickerItem,
	};

	readonly state: DialogPickerState = {
		onValueChange: (value: any) => this.setState({ value, visible: !this.state.visible }),
		setValue: (value: any) => this.setState({ value, visible: !this.state.visible }),
		visible: false,
	};

	toggleDialog = () => this.setState({ visible: !this.state.visible });

	onValueChnage = (value: any) => () => {
		this.props.onValueChange(value);
		this.toggleDialog();
	};
	componentWillMount() {
		this.setState({ value: this.props.value });
	}
	render() {
		const {
			children,
			// disabled,
			// displayEmpty,
			// error,
			// id,
			// name,
			label,
			// native,
			// onChange,
			// readOnly,
			// value,
			placeholder,
			// variant,
		} = this.props;

		return (
			<View>
				<List>
					<List.Item title={label} onPress={this.toggleDialog} description="ok" />
				</List>
				<DialogPickerContext.Provider value={this.state}>
					<Dialog
						visible={this.state.visible}
						onDismiss={this.toggleDialog}
						style={{ maxHeight: '70%' }}
					>
						{placeholder ? <PickerItem value="" label={placeholder} disabled /> : null}
						<ScrollView>{children}</ScrollView>
					</Dialog>
				</DialogPickerContext.Provider>
			</View>
		);
	}
}
