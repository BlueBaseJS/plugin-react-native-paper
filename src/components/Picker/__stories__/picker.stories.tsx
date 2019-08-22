import React from 'react';
import { getComponent } from "@bluebase/core";
import storiesOf from '@bluebase/storybook-addon';

const Picker = getComponent('Picker');
storiesOf('Picker', module)
    .add('Picker Modal', () => (
        <Picker
            label='enter label'
            selectedValue={'sample'}
            mode='modal'
            onValueChange={(value, i) => console.log('value', value)}
            items={[{ label: 'SanPyaeLin', value: 'SanPyaeLin' }, { label: 'Jhon', value: 'Jhon' }, { label: 'Marry', value: 'Marry' }]}
        />
    ))

    .add('dropdown Picker ', () => (
        <Picker
            label='enter label'
            selectedValue={'sample'}
            onValueChange={(value, i) => console.log('value', value)}
            items={[{ label: 'SanPyaeLin', value: 'SanPyaeLin' }, { label: 'Jhon', value: 'Jhon' }, { label: 'Marry', value: 'Marry' }]}
        />
    ))

    .add('dropdown Picker ', () => (
        <Picker
            label='enter label'
            selectedValue={'sample'}
            mode='actionSheet'
            onValueChange={(value, i) => console.log('value', value)}
            items={[{ label: 'SanPyaeLin', value: 'SanPyaeLin' }, { label: 'Jhon', value: 'Jhon' }, { label: 'Marry', value: 'Marry' }]}
        />
    ));

