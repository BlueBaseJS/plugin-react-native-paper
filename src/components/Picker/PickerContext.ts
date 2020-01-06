import { createContext } from 'react';

export interface PickerContextData {
	mode: string;
	selectedValue?: any;
	onValueChange: (value: any, index: number) => void;
}

export const PickerContext: React.Context<PickerContextData> = createContext(undefined as any);
