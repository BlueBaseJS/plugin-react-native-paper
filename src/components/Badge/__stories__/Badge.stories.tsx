import { BadgeProps } from '@bluebase/components';
import React from 'react';
// import { View } from 'react-native';
// import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';

const Badge = getComponent<BadgeProps>('Badge');

const stories = storiesOf('Badge', module);

// stories.addDecorator(withInfo);
// stories.addDecorator(withKnobs);

stories

.add('1st Badge', () => (
    <Badge style = {{marginTop: 96}}>3</Badge>
))
.add('2nd Badge', () => (
    <Badge style = {{color: 'red'}}></Badge>
))