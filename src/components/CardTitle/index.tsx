import { Card } from 'react-native-paper';
import { CardHeaderProps } from '@bluebase/components';

import React from 'react';

const CardHeader = (props: CardHeaderProps) => <Card.Title     {...props} />;
export { CardHeader };