
import { AvatarProps } from '@bluebase/components';

import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';


const Avatar = getComponent<AvatarProps>('Avatar');

const stories = storiesOf('Avatar', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories.add('Simple Avatar ', () => (
  <Avatar
    type="image"
    image={{ uri: 'https://via.placeholder.com/300/09f.png%20C/O%20https://placeholder.com/' }}
  />
));



stories.add('Simple Avatar with text prop ', () => (
  <Avatar
    type="text"
    text={'AR'}  // why this prop is of imagesource type ? issue in typings.
  />
));


stories.add('Simple Avatar with icon prop ', () => (
  <Avatar
    type="icon"
    icon="star"
  />
));


stories.add('Simple Avatar without icon prop ', () => (
  <Avatar
    type={'foo' as any}
  />
));

stories.add('Simple Avatar local images ', () => (
  <Avatar
    type="image"
    image={require('./download.png')}

  />

));


stories.add('Simple Avatar  with style prop ', () => (
  <Avatar
    type="image"
    image={require('./download.png')}
  />

));


stories.add('Simple Avatar  with style prop ', () => (
  <Avatar
    size={80}
    type="image"
    image={require('./download.png')}
  />

));


stories.add('Simple Avatar  with style prop ', () => (
  <Avatar
    type="image"
    image={require('./download.png')}
  />

));