import {
	Dialog,
	List,
	PickerDefaultProps,
	PickerItem,
	PickerProps,
	ScrollView,
	View,
} from '@bluebase/components';

import { PickerContext } from './PickerContext';
import React from 'react';

export interface DialogPickerProps extends PickerProps {
	mode: 'dialog';
}

export interface DialogPickerState {
	value?: any;
	visible: boolean;
}

export class DialogPicker extends React.PureComponent<DialogPickerProps, DialogPickerState> {
	static defaultProps = PickerDefaultProps;

	readonly state: DialogPickerState = {
		visible: false,
	};

	toggleDialog = () => this.setState({ visible: !this.state.visible });

	onValueChnage = (value: any) => () => {
		const { onValueChange } = this.props;

		if (onValueChange) {
			onValueChange(value, -1);
		}

		this.toggleDialog();
	};

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
			mode,
		} = this.props;

		return (
			<View>
				<List>
					<List.Item title={label} onPress={this.toggleDialog} description={this.state.value} />
				</List>
				<Dialog
					visible={this.state.visible}
					onDismiss={this.toggleDialog}
					style={{ maxHeight: '70%' }}
				>
					<ScrollView>
						<PickerContext.Provider
							value={{
								mode,
								setValue: (value: any) => this.setState({ value, visible: !this.state.visible }),
								value: this.state.value,
							}}
						>
							{placeholder ? <PickerItem value="" label={placeholder} disabled /> : null}
							{children}
						</PickerContext.Provider>
					</ScrollView>
				</Dialog>
			</View>
		);
	}
}
