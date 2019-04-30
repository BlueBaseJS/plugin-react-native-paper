import { getComponent } from '@bluebase/core';

import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { Button } from 'react-native-paper';
import { DynamicIcon } from '@bluebase/components';

const stories = storiesOf('Menu', module);

const Menu = getComponent('Menu');
const MenuItem = getComponent('MenuItem');



// export default class MenuComponent extends React.Component {
// 	state = {
// 		visible: false,
// 	};

// 	hideMenu = () => this.setState({ visible: !this.state.visible });

// 	render() {
// 		return (
// 			<>
// 				<Menu
// 					visible={this.state.visible}
// 					onDismiss={this.hideMenu}
// 				>
// 					<MenuItem title='item one' />
// 					<MenuItem title='item two' />
// 					<MenuItem title='item three' />


// 				</Menu>
// 				<Button style={{ marginTop: 200 }} onPress={this.hideMenu}>
// 					Close Menu
//           </Button>

// 			</>
// 		);
// 	}
// }



stories

	.add('Menu with items, anchor and onPress', () => (
		<Menu
			anchor={
				<Button onPress={() => alert('Clicked')}>Show menu</Button>
			}
			style={{ marginTop: 30, backgroundColor: 'blue' }}
			visible={true}
			onDismiss={() => null}
		>
			<MenuItem title='item one' />
			<MenuItem title='item two' />
			<MenuItem title='item three' />
			<MenuItem title='item four' />

		</Menu>

	))

	.add('Menu with  visibile false', () => (
		<Menu
			visible={false}
			onDismiss={() => null}
		>
			<MenuItem title='item one' />
			<MenuItem title='item two' />
		</Menu>
	))

	.add('MenuItem Props ', () => (
		<Menu
			anchor={
				<Button onPress={() => null}>Show menu</Button>
			}
			style={{ marginTop: 30, }}
			onDismiss={() => null}
			visible={true}
		>
			<MenuItem title='item one' />
			<MenuItem title='item Icon' icon ={DynamicIcon}  />
			<MenuItem title='item two with disabled prop' disabled={true} />
			<MenuItem title='item with style' />
			<MenuItem title='item with onPress Prop' onPress={() => alert('Clicked')} />


		</Menu>


	)



	);