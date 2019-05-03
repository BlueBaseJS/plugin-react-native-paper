import { Card } from 'react-native-paper';
import React from 'react';

export const CardHeader = (props: any) => {
	if (props.left === undefined) {
		return (
			<Card.Title
				title={props.title}
				right={() => props.right}
				subtitle={props.description}
				style={props.style}
			/>
		);
	}
	if (props.right === undefined) {
		return (
			<Card.Title
				title={props.title}
				left={() => props.left}
				subtitle={props.description}
				style={props.style}
			/>
		);
	}
	return (
		<Card.Title
			title={props.title}
			right={() => props.right}
			left={() => props.left}
			subtitle={props.description}
			style={props.style}
		/>
	);
};