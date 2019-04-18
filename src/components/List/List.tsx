import { List as BBList, ListIcon, ListItem, ListSubheader } from '@bluebase/components';
import { List as L } from 'react-native-paper';

export const List = L.Section as typeof BBList;

List.Icon = ListIcon;
List.Item = ListItem;
List.Subheader = ListSubheader;