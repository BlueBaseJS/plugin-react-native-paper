import React from 'react';
import { Portal } from 'react-native-paper';

export const withPortal =
(Component: React.ComponentType<any>) =>
	(props: any) =>
		(
			<Portal.Host>
				<Component {...props} />
			</Portal.Host>
		);