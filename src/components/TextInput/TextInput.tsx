import { TextInput as RNP_TextInput } from 'react-native-paper';
import { TextInputProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const TextInput = componentMapper<TextInputProps>(RNP_TextInput, {
	mode: ({ variant }: TextInputProps) =>
		variant !== 'outlined'
		? 'flat'
		: 'outlined',

}, { rest: true, });
