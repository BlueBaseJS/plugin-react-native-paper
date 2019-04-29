import { getComponent } from '@bluebase/core';

import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { Button, Text } from 'react-native-paper';
import { DynamicIcon } from '@bluebase/core/dist/getComponent';

const stories = storiesOf('Menu', module);

const Menu = getComponent('Menu');
const MenuItem = getComponent('MenuItem');

function Clickme (){
   
}

stories

    .add('Menu  with items', () => (
        <Menu
            anchor={
                <Button onPress={() => null}>Show menu</Button>
            }
            style={{ marginTop: 30, backgroundColor: 'red' }}
            onDismiss={() => null}
            visible={true}
        >
        <MenuItem title = 'item one'/>
        <MenuItem title = 'item two'/>
        <MenuItem title = 'item three'/>
       

        </Menu>


    ))

    .add('Menu  with dynamicIcon', () => (
        <Menu
            anchor={
                <Button onPress={() => null}>Show menu</Button>
            }
            style={{ marginTop: 30, backgroundColor: 'red' }}
            onDismiss={() => null}
            visible={true}
        >
        <MenuItem icon={DynamicIcon} onPress={alert('Clicked')} title = 'item one'/>
        <MenuItem title = 'item two with disabled prop' disabled = {true}/>
        <MenuItem title = 'item with style'  />
       

        </Menu>


    )
    
    
    
    );