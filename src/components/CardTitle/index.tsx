import { Card } from 'react-native-paper';
import { CardHeaderProps } from '@bluebase/components';

import React from 'react';

const CardHeader = (props: CardHeaderProps) => <Card.Title   title={props.title}   {...props as any} />;
export { CardHeader };