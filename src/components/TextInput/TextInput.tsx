import MUITextInput from '@material-ui/core/TextField';
import { TextInputProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const TextInput = componentMapper<TextInputProps>(MUITextInput, {
	disabled: ({ disabled, editable }: TextInputProps) =>
		disabled !== undefined
		? disabled
		: editable !== undefined ? !editable : undefined,
	onChange: ({ onChange, onChangeText }: TextInputProps) => (event: any) => {

		if (onChange) {
			onChange(event);
		}
		if (onChangeText && event && event.target) {
			onChangeText(event.target.value);
		}
	},

	rows: 'numberOfLines',
}, { rest: true, });
