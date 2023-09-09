import { Table } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const stories = storiesOf('Table', module);
let id = 0;
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];
stories.add('Table', () => (
	<Table>
		<Table.Head>
			<Table.Cell>Dessert (100g serving)</Table.Cell>
			<Table.Cell>Calories</Table.Cell>
			<Table.Cell>Fat (g)</Table.Cell>
			<Table.Cell>Carbs (g)</Table.Cell>
			<Table.Cell>Protein (g)</Table.Cell>
		</Table.Head>

		<Table.Body>
			{rows.map((row: any) => (
				<Table.Row key={row.id}>
					<Table.Cell>{row.name}</Table.Cell>
					<Table.Cell>{row.calories}</Table.Cell>
					<Table.Cell>{row.fat}</Table.Cell>
					<Table.Cell>{row.carbs}</Table.Cell>
					<Table.Cell>{row.protein}</Table.Cell>
				</Table.Row>
			))}
		</Table.Body>
	</Table>
));
