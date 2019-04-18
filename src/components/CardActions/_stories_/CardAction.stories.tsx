
import { CardActionsProps } from '@bluebase/components';
import { IconButton } from 'react-native-paper';

import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const CardActions = getComponent<CardActionsProps>('CardActions');

const stories = storiesOf('Card Action', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories

  .add('SimpleCard', () => (
    <CardActions>
      <IconButton icon="more-vert" onPress={() => { }} />
      <IconButton icon="more-vert" onPress={() => { }} />
      <IconButton icon="more-vert" onPress={() => { }} />
    </CardActions>));
