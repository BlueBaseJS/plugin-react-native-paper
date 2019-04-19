import { ThemeConsumer, ThemeContextData } from '@bluebase/core';
import { IconButton as RNP_IconButton } from 'react-native-paper';
import { Icon } from '@bluebase/components'
import { IconButtonProps } from '@bluebase/components';
import React from 'react';
const IconButtonComponent = (props: IconButtonProps) => (
    <ThemeConsumer>
        {({ theme }: ThemeContextData) => {

            const { color, size, onPress, style, ...rest } = props;
            const rnpColor = (color === 'secondary') ? theme.palette.secondary.main : theme.palette.primary.main;

            return (
                <RNP_IconButton color={rnpColor}>
                </RNP_IconButton>
            );
        }}
    </ThemeConsumer >
);

export const IconButton = IconButtonComponent;