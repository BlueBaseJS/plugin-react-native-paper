import { CardDefaultProps, CardProps } from '@bluebase/components';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiCard from '@material-ui/core/Card';
import React from 'react';



export const Card = (props: CardProps) => {

	if (props.onPress === undefined) {
	 return (
			<MuiCard style={props.style as any} {...props}>{props.children}</MuiCard>
	);
	}
	return (
		<MuiCard   style={props.style as any} {...props}>
			<CardActionArea onClick={props.onPress}>
				{props.children}
			</CardActionArea>
		</MuiCard>
	);

};
Card.deafultProps=CardDefaultProps;
