import { Avatar, ListAvatarProps } from '@bluebase/components';

import React from 'react';
import { TextStyle } from 'react-native';
import { Theme } from '@bluebase/core';

export interface ListAvatarStyles {
	root: TextStyle;
}

export const ListAvatar = (props: ListAvatarProps & { styles: ListAvatarStyles }) => (
	<Avatar size={40} style={{ margin: 8 }} {...props} />
);

ListAvatar.defaultStyles = (theme: Theme) => ({
	root: {
		color: theme.palette.action.active,
	},
});
