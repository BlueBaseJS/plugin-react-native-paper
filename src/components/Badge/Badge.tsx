import { Badge as RNPBadge } from 'react-native-paper';
import { BadgeProps } from '@bluebase/components';
import React from 'react';

const Badge = (props: BadgeProps) => (
    <RNPBadge visible={props.visible} style={props.style}{...props}>
        {props.children}
    </RNPBadge>
);

export { Badge };
