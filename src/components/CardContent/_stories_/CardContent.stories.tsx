
import { CardContentProps, Text } from '@bluebase/components';
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const CardContent = getComponent<CardContentProps>('CardContent');

const stories = storiesOf('CardContent', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories

  .add('SimpleCard', () => (
    <CardContent>
      <Text>

        This impressive paella is a perfect party dish and a fun meal to cook together with your
        guests. Add 1 cup of frozen peas along with the mussels, if you like.
    </Text>

    </CardContent>));


