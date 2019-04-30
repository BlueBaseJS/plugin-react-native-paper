# Menu component

This is the menu component which contains multiple menu items. We can select any one of them according to our need.

### 🎊  How to use it ?

```
	     <Menu
			anchor={
				<Button onPress={() => alert('Clicked')}>Show menu</Button>
			}
			style={{ marginTop: 30, backgroundColor: 'blue' }}
			visible={true}
			onDismiss={() => null}>
            
			<MenuItem title='item one' />
			<MenuItem title='item two' />
			<MenuItem title='item three' />
			<MenuItem title='item four' />

		</Menu>

```
## Menu Props

 Relativetime |  📱 Android   | IOS |
| :----------------: | :----------------: | :----------------: |
|anchor|   ✔️|    ?|  
|style|   ✔️|    ?|  
|visible|   ✔️|    ?|  
|onDismiss() =>void|   ✔️|    ?|  
|style| ✔️ |  ? |    ?|  
|children-RN| ✔️ |  ? |    ?|  




## User Stories

|                               Story                               | In Storybook | Has Unit Test |
| :---------------------------------------------------------------: | :----------: | :-----------: |
|               Menu with style as prop             |      ✅       |       ✅       |
|            Menu with anchor as prop             |      ✅       |       ✅       |
|                Menu with With visible as a prop                 |      ✅       |       ✅        |
|                Menu with With onDismiss as a prop                 |      ✅       |        ❌       |
|              Menu with children of ReactNode type              |      ✅       |       ✅       |

