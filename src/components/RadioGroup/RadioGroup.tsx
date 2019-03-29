import MuiRadioGroup from '@material-ui/core/RadioGroup';
import { RadioGroupProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

export const RadioGroup = componentMapper<RadioGroupProps>(MuiRadioGroup, {
	onChange: ({ onValueChange }: RadioGroupProps) => (_event: object, value: any)  => {
		if (onValueChange) {
			onValueChange(value);
		}
	}
}, { rest: true });

