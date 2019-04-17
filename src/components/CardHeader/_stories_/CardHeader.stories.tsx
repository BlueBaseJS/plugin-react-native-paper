
import Avatar from '@material-ui/core/Avatar';
import { CardHeaderProps } from '@bluebase/components';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const CardHeader = getComponent<CardHeaderProps>('CardHeader');

const stories = storiesOf('Card', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

  .add('SimpleCard', () => (
    <RecipeReviewCard />
  ));


function RecipeReviewCard() {



	return (
    <CardHeader
      left={
        <Avatar aria-label="Recipe">
          R
          </Avatar>}
      right={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      description="September 14, 2016"
    >
      {}
    </CardHeader>

  );
}

export default RecipeReviewCard;