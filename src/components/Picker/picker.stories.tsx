import { Picker } from './index';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Picker', module)
    .add('Picker', () => (
        <Picker
            label='enter label'
            selectedValue={'sample'}
            onValueChange={(value, i) => console.log('value', value)}
            items={[{ label: 'SanPyaeLin', value: 'SanPyaeLin' }, { label: 'Jhon', value: 'Jhon' }, { label: 'Marry', value: 'Marry' }]}
        />
    ))

