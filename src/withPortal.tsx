import { Portal } from 'react-native-paper';
import React from 'react';

export const withPortal =
(Component: React.ComponentType<any>) =>
	(props: any) =>
		(
			<Portal.Host>
				<Component {...props} />
			</Portal.Host>
		);