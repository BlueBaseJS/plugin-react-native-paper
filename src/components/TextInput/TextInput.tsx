import { HelperText, TextInput as RNPTextInput } from 'react-native-paper';

import React from 'react';
import { TextInputProps } from '@bluebase/components';

export const TextInput = (props: TextInputProps) => {
	const { error, helperText, variant, ...rest } = props;
	const mode = variant !== 'outlined' ? 'flat' : 'outlined';
	const node = <RNPTextInput error={error} mode={mode} {...(rest as any)} />;

	if (helperText) {
		return (
			<>
				{node}
				<HelperText type={error ? 'error' : 'info'}>{helperText}</HelperText>
			</>
		);
	}

	return node;
};
