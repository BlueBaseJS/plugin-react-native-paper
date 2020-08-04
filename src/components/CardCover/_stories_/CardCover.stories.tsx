/* eslint-disable max-len */

import { CardCover } from '@bluebase/components';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('Card', module);

stories.add('CardCover', () => (
	<CardCover
		style={{ width: 400, height: 400 }}
		source={{
			uri:
				'https://www.careerz360.pk/cdn.careerz360.pk/Content/UserData/empr/f1172787-3c92-459c-a5cc-5a9b7da8613e/profile_pics/thumbnail_bd47c439-bf95-4c30-8be8-fe77023194a0.png',
		}}
	/>
));
