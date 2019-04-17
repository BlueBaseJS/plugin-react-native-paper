
import {  CardActionsProps } from '@bluebase/components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';

import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const CardActions = getComponent<CardActionsProps>('CardActions');

const stories = storiesOf('Card Action', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

  .add('SimpleCard', () => (
    <RecipeReviewCard />
  ));


function RecipeReviewCard() {
	const [expanded, setExpanded] = React.useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}

	return (

    <CardActions>
      <IconButton aria-label="Add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="Share">
        <ShareIcon />
      </IconButton>
      <IconButton

        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="Show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>

	);
}

export default RecipeReviewCard;