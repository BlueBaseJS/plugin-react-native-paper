import { Avatar, ListAvatarProps } from '@bluebase/components';

import React from 'react';

export const ListAvatar = (props: ListAvatarProps) => (
	<Avatar size={40} {...props} style={{ margin: 8, ...props.style }}  />
);
