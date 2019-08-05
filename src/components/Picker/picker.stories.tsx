import { Picker } from './index';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Picker', module)
    .add('Picker', () => (
        <Picker
            label='enter label'
            selectedValue={'sample'}
            onValueChange={(value, i) => console.log('value', value)}
            items={[{ label: 'SanPyaeLin', value: '22' }, { label: 'Jhon', value: '1' }, { label: 'Marry', value: '2' }]}
        />
    ))

