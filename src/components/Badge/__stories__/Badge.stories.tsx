import { BadgeProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const Badge = getComponent<BadgeProps>('Badge');
const stories = storiesOf('Badge', module);
stories

    .add('Badge with Text', () => (
        <Badge visible={true} style={{ marginTop: 150, backgroundColor: 'blue' }}>Badge</Badge>
    ))
    .add('Badge with Number', () => (
        <Badge visible={true} style={{ marginTop: 150, color: 'white', backgroundColor: 'blue' }}>9</Badge>
    ))
    .add('Badge with Red Background Color', () => (
        <Badge visible={true} style={{ marginRight: 50, marginTop: 250, backgroundColor: 'red' }}>349</Badge>
    ))