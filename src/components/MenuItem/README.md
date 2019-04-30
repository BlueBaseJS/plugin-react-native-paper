# MenuItem component

This is the MenuItem component which performs as children within the Menu component. We can select any one of them according to our need.

### 🎊 How to use it ?

```
	    <Menu visible={false}>
		
			<MenuItem title='item one' />
			<MenuItem title='item two' />
		</Menu>

```

## MenuItem Props

 Relativetime |  📱 Android   | IOS |
| :----------------: | :----------------: | :----------------: |
|title|   ✔️|    ?|  
|icon|   ?|    ?|  
|disabled|   ✔️|    ?|  
|onPress|   ✔️|    ?|  
|style| ✔️ |  ? |    ?|
|theme| ✔️ |  ? |    ?|



## User Stories

|                               Story                               | In Storybook | Has Unit Test |
| :---------------------------------------------------------------: | :----------: | :-----------: |
|               MenuItem with title as prop             |      ✅       |       ✅       |
|            MenuItem with icon as prop             |      ✅       |     ?     |
|                MenuItem with disabled as a prop                 |      ✅       |       ✅        |
|                MenuItem with  onPress as a prop                 |      ✅       |       ?    |
|              MenuItem with style as prop              |      ✅       |      ?     |



## Design States


Normal States: closed menu

Loading States: null

Empty States: null


