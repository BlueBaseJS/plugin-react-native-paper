import { List, Menu, PickerDefaultProps, PickerItem, View } from '@bluebase/components';

// import OutlinedInput from '@material-ui/core/OutlinedInput';
import React from 'react';
// import FilledInput from '@material-ui/core/FilledInput';
// import Input from '@material-ui/core/Input';
import { TextInput } from 'react-native-paper';

interface SelectPickerState {
	visible: boolean;
}
// import Select, { SelectProps } from '@material-ui/core/Select';

export class SelectPicker extends React.PureComponent<any, SelectPickerState> {
	constructor(props: any) {
		super(props);
		this.state = { visible: false };
	}
	render() {
		const {
			children,
			disabled,
			displayEmpty,
			error,
			id,
			name,
			mode,
			onChange,
			readOnly,
			value,
			placeholder,
			variant,
		} = this.props;
		const toggle = () => {
			this.setState({ visible: !this.state.visible });
		};
		return (
			<View>
				{/* <List>
					<List.Item title="THis is " onPress={toggle} description="ok" />
				</List> */}
				{/* <Menu onDismiss={toggle} visible={true}> */}
				{placeholder ? <PickerItem value="" label={placeholder} disabled /> : null}
				{children}
				{/* </Menu> */}
			</View>
		);
	}
}

// SelectPicker.defaultProps = {
// 	...PickerDefaultProps,
// 	PickerItem,
// };

// let InputComponent = TextInput;
// let Input;
// if (variant === 'flat') {
// 	Input = (props: any) => {
// 		<TextInput {...props} mode="flat" />;
// 	};
// }
// if (variant === 'outlined') {
// 	// InputComponent = OutlinedInput as any;
// 	Input = (props: any) => {
// 		<TextInput {...props} mode="outlined" />;
// 	};
// }

// const selectProps = {
// 	disabled,
// 	displayEmpty,
// 	error,
// 	input: <Input {...{ id, name }} />,
// 	native: mode === 'default',
// 	onChange,
// 	readOnly,
// 	value,
// };

// return (
// <Select {...selectProps}>

// </Select>
// );
