import List from '@material-ui/core/List';
import { ListSectionProps } from '@bluebase/components';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const ListSection = componentMapper<ListSectionProps>(List, {
	children: 'children',
	// subheader: (props: ListSectionProps) => {

	// 	const { children } = props;
	// 	let subheader;

	// 	for (const child of React.Children.toArray(children)) {
	// 		if ((child as any).type.displayName === 'ListSubheader'){
	// 			subheader = (child as any).props.children;
	// 			break;
	// 		}
	// 	}

	// 	return subheader ? <ListSubheader>{subheader}</ListSubheader> : null;
	// }
});

