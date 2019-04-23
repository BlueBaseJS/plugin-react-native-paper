import { Dialog as RNPDialog, Portal } from 'react-native-paper';
import { DialogProps } from '@bluebase/components';
import React from 'react';

export const Dialog = (props: DialogProps) => (
	<Portal><RNPDialog {...props} /></Portal>
);
