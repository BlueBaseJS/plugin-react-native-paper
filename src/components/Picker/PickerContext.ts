import { createContext } from 'react';

export interface PickerContextData {
	mode: string;
	value?: any;
	setValue: (value: any) => void;
}

export const PickerContext: React.Context<PickerContextData> = createContext(undefined as any);
