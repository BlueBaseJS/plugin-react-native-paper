import React from 'react';
import { View } from 'react-native';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import from  "@bluebase/components"
const Avatar = getComponent('Avatar');

storiesOf('Divider', module)

  .add('Image Avatar props', () => (
    <Avatar size={24} source={{ uri: "https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg" }} />
  ))

  .add('Image Avatar props', () => (
    <Avatar type="Text" label="XD" color="red" />
  ))

  .add('Image Avatar props', () => (
    <Avatar type="Icon" size={24} icon="folder" />
  ))

