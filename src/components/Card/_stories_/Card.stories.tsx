
// import { CardProps, CardActionsProps, CardCoverProps, CardHeaderProps, CardContentProps, Text } from '@bluebase/components';
// import React from 'react';
// import { IconButton } from 'react-native-paper';

// import { getComponent } from '@bluebase/core';
// import storiesOf from '@bluebase/storybook-addon';
// // import { withInfo } from '@storybook/addon-info';
// // import { withKnobs } from '@storybook/addon-knobs';

// const Card = getComponent<CardProps>('Card');
// const CardCover = getComponent<CardCoverProps>('CardCover');
// const CardContent = getComponent<CardContentProps>('CardContent');
// const CardActions = getComponent<CardActionsProps>('CardActions');
// const CardHeader = getComponent<CardHeaderProps>('CardHeader');

// const stories = storiesOf('Card', module);

// // stories.addDecorator(withInfo);
// // stories.addDecorator(withKnobs);

// stories

// 	.add('SimpleCard Stories', () => (
// 		<RecipeReviewCard />
// 	));


// export function RecipeReviewCard() {


// 	return (
// 		<Card
// 		 style={{ width: 400 }}
// 		>
// 			<CardHeader

// 				title="Shrimp and Chorizo Paella"
// 				description="September 14, 2016"
// 			>
// 				{}
// 			</CardHeader>
// 			<CardCover
// 				style={{ width: 400, height: 400 }}
// 				source={{
// 					uri: 'https://www.careerz360.pk/cdn.careerz360.pk/Content/UserData/empr/f1172787-3c92-459c-a5cc-5a9b7da8613e/profile_pics/thumbnail_bd47c439-bf95-4c30-8be8-fe77023194a0.png'
// 			}}
// 			// title="Paella dish"
// 			/>
// 			<CardContent>
// 				<Text>
// 					This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Text>
// 			</CardContent>
// 			<CardActions>
// 				<IconButton icon="more-vert" onPress={() => { }} />
// 				<IconButton icon="more-vert" onPress={() => { }} />
// 				<IconButton icon="more-vert" onPress={() => { }} />
// 			</CardActions>

// 		</Card>
// 	);
// }

// export default RecipeReviewCard;