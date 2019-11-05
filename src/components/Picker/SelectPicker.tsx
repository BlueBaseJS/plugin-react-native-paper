import { Picker } from '@bluebase/components';
import React from 'react';

interface SelectPickerState {
	visible: boolean;
}

export class SelectPicker extends React.PureComponent<any, SelectPickerState> {
	constructor(props: any) {
		super(props);
		this.state = { visible: false };
	}
	render() {
		const {
			children,
			// disabled,
			// displayEmpty,
			// error,
			// id,
			name,
			// mode,
			// onChange,
			// readOnly,
			// value,
			placeholder,
			// variant,
		} = this.props;
		return (
			<Picker name={name} placeholder={placeholder}>
				{children}
			</Picker>
		);
	}
}
