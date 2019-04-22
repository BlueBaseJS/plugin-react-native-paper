import { BadgeProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import React from 'react';
import { Badge as RNPBadge } from 'react-native-paper';

const Text = getComponent('Text');
const Badge = (props: BadgeProps) => (
    // const { children, variant, title, variant, ...rest } = props;
    // const rnpColor = (color === 'secondary') ? theme.palette.secondary.main : theme.palette.primary.main;
    <RNPBadge visible={props.visible} style={props.style}{...props}>
        <Text>{props.children}</Text>
    </RNPBadge>
);

export { Badge };
