import { Icon, SearchbarDefaultProps, SearchbarProps } from '@bluebase/components';

import React from 'react';
import { Searchbar as SearchbarRNP } from 'react-native-paper';

export const Searchbar = (props: SearchbarProps) => {
	const { icon, clearIcon, value, ...rest } = props;

	const renderIcon =
		icon && (({ size, color }: any) => <Icon name="magnify" color={color} size={size} {...icon} />);

	const renderClearIcon =
		clearIcon &&
		(({ size, color }: any) => <Icon name="magnify" color={color} size={size} {...clearIcon} />);

	return <SearchbarRNP icon={renderIcon} clearIcon={renderClearIcon} value={value!} {...rest} />;
};

Searchbar.defaultProps = SearchbarDefaultProps;
