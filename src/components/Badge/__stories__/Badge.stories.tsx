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

    .add('Badge with Text', () => (
        <Badge visible={true} style={{ marginTop: 150, backgroundColor: 'blue' }}>Badge</Badge>
    ))
    .add('Badge with Number', () => (
        <Badge visible={true} style={{ marginTop: 150, color: 'white', backgroundColor: 'blue' }}>9</Badge>
    ))
    .add('Badge with Red Background Color', () => (
        <Badge visible={true} style={{ marginTop: 150, backgroundColor: 'red' }}>349</Badge>
    ))