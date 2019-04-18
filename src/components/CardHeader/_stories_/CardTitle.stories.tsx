
import { CardHeaderProps, Text } from '@bluebase/components';
import { IconButton } from 'react-native-paper';

import React from 'react';

import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const CardTitle = getComponent<CardHeaderProps>('CardTitle');

const stories = storiesOf('Card', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories

  .add('SimpleCard', () => (
    <RecipeReviewCard />
  ));


function RecipeReviewCard() {



	return (
    <CardTitle
      style={{}}
      left={<Text>kk</Text>}
      right={
        <IconButton icon="more-vert" onPress={() => { }} />}
      title="Shrimp and Chorizo Paella"
      description="September 14, 2016"
    >
      {}
    </CardTitle>

  );
}

export default RecipeReviewCard;