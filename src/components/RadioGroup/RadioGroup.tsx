import MuiRadioGroup from '@material-ui/core/RadioGroup';
import { RadioGroupProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const RadioGroup = componentMapper<RadioGroupProps>(MuiRadioGroup, {
	onChange: ({ onChange, onValueChange }: any) => (event: any, value: string | number | boolean)  => {
		if (onChange) {
			onChange(event, value);
		}

		if (onValueChange) {
			onValueChange(value);
		}
	}
}, { rest: true });

