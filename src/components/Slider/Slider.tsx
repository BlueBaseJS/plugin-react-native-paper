import MUISlider from '@material-ui/lab/Slider';
import { SliderProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';


export const Slider = componentMapper<SliderProps>(MUISlider, {

	max: 'maximumValue',
	min: 'minimumValue',

	onChange: ({ onChange, onValueChange }: any) => (event: any, value: number)  => {
		if (onChange) {
			onChange(event, value);
		}

		if (onValueChange) {
			onValueChange(value);
		}
	}

}, { rest: true, ignore: ['onValueChange'] });
