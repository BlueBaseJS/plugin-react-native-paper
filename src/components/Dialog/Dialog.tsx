import { DialogProps } from '@bluebase/components';
import React from 'react';
import { Dialog as RNPDialog, Portal } from 'react-native-paper';

export const Dialog = (props: DialogProps) => (
	<Portal><RNPDialog {...props} /></Portal>
);
