"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const Checkbox_1 = require("../Checkbox");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
describe.only('Checkbox', () => {
    it('should set the status to checked when checked is true', () => {
        const component = enzyme_1.mount(react_1.default.createElement(Checkbox_1.Checkbox, { checked: true }));
        // expect(component).toMatchSnapshot();
        expect(component.childAt(0).prop('status')).toEqual('checked');
    });
    it('should set the status to unchecked when checked is false', () => {
        const component = enzyme_1.mount(react_1.default.createElement(Checkbox_1.Checkbox, { checked: false }));
        expect(component.childAt(0).prop('status')).toEqual('unchecked');
    });
    it('should set the status to indeterminate when indeterminate flag is true', () => {
        const component = enzyme_1.mount(react_1.default.createElement(Checkbox_1.Checkbox, { checked: false, indeterminate: true }));
        // expect(component).toMatchSnapshot();
        expect(component.childAt(0).prop('status')).toEqual('indeterminate');
    });
    it('should pass the color as is when set to "primary"', async () => {
        const BBCheckbox = components_1.getComponent('Checkbox');
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { components: { Checkbox: Checkbox_1.Checkbox } },
            react_1.default.createElement(BBCheckbox, { color: "primary" })));
        await enzyme_async_helpers_1.waitForElement(component, BBCheckbox);
        // expect(component).toMatchSnapshot();
        expect(component.find('TouchableHighlight').last().prop('color')).toEqual('#3f51b5');
    });
    it('should pass the color as is when set to "secondary"', async () => {
        const BBCheckbox = components_1.getComponent('Checkbox');
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { components: { Checkbox: Checkbox_1.Checkbox } },
            react_1.default.createElement(BBCheckbox, { color: "secondary" })));
        await enzyme_async_helpers_1.waitForElement(component, BBCheckbox);
        // expect(component).toMatchSnapshot();
        expect(component.find('TouchableHighlight').last().prop('color')).toEqual('#f50057');
    });
    it('should pass the color as is when set to "default"', async () => {
        const BBCheckbox = components_1.getComponent('Checkbox');
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { components: { Checkbox: Checkbox_1.Checkbox } },
            react_1.default.createElement(BBCheckbox, { color: "default" })));
        await enzyme_async_helpers_1.waitForElement(component, BBCheckbox);
        expect(component.find('TouchableHighlight').last().prop('color')).toEqual('');
        // expect(component).toMatchSnapshot();
    });
    it('should set the color prop to undefined and create classes for custom colors', async () => {
        const BBCheckbox = components_1.getComponent('Checkbox');
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { components: { Checkbox: Checkbox_1.Checkbox } },
            react_1.default.createElement(BBCheckbox, { color: "red" })));
        await enzyme_async_helpers_1.waitForElement(component, BBCheckbox);
        // expect(component).toMatchSnapshot();
        expect(component.find('TouchableHighlight').last().prop('color')).toEqual('red');
    });
    it('should set the label component', async () => {
        const BBCheckbox = components_1.getComponent('Checkbox');
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { components: { Checkbox: Checkbox_1.Checkbox } },
            react_1.default.createElement(BBCheckbox, { label: "Foo" })));
        await enzyme_async_helpers_1.waitForElement(component, BBCheckbox);
        // expect(component).toMatchSnapshot();
        expect(component.find('Checkbox Text').last().text()).toEqual('Foo');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9DaGVja2JveC9fX3Rlc3RzX18vQ2hlY2tib3gudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLDBDQUF1QztBQUN2QywwREFBMEI7QUFDMUIscURBQW9EO0FBQ3BELG1DQUErQjtBQUMvQiwrREFBc0Q7QUFFdEQsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO0lBRTlCLEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxHQUFHLEVBQUU7UUFDaEUsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxtQkFBUSxJQUFDLE9BQU8sU0FBRyxDQUNwQixDQUFDO1FBRUYsdUNBQXVDO1FBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRSxHQUFHLEVBQUU7UUFDbkUsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxtQkFBUSxJQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUksQ0FDNUIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3RUFBd0UsRUFBRSxHQUFHLEVBQUU7UUFDakYsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxtQkFBUSxJQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsYUFBYSxTQUFHLENBQzFDLENBQUM7UUFFRix1Q0FBdUM7UUFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FB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T0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xGLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQy9DLE1BQU0sVUFBVSxHQUFHLHlCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFNUMsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBUixtQkFBUSxFQUFFO1lBQ3BDLDhCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsS0FBSyxHQUFHLENBQ2IsQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFbkQsdUNBQXVDO1FBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9DaGVja2JveC9fX3Rlc3RzX18vQ2hlY2tib3gudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL0NoZWNrYm94JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuZGVzY3JpYmUub25seSgnQ2hlY2tib3gnLCAoKSA9PiB7XG5cblx0aXQoJ3Nob3VsZCBzZXQgdGhlIHN0YXR1cyB0byBjaGVja2VkIHdoZW4gY2hlY2tlZCBpcyB0cnVlJywgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PENoZWNrYm94IGNoZWNrZWQgLz5cblx0XHQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5jaGlsZEF0KDApLnByb3AoJ3N0YXR1cycpKS50b0VxdWFsKCdjaGVja2VkJyk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgc2V0IHRoZSBzdGF0dXMgdG8gdW5jaGVja2VkIHdoZW4gY2hlY2tlZCBpcyBmYWxzZScsICgpID0+IHtcblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxDaGVja2JveCBjaGVja2VkPXtmYWxzZX0gLz5cblx0XHQpO1xuXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5jaGlsZEF0KDApLnByb3AoJ3N0YXR1cycpKS50b0VxdWFsKCd1bmNoZWNrZWQnKTtcblx0fSk7XG5cblx0aXQoJ3Nob3VsZCBzZXQgdGhlIHN0YXR1cyB0byBpbmRldGVybWluYXRlIHdoZW4gaW5kZXRlcm1pbmF0ZSBmbGFnIGlzIHRydWUnLCAoKSA9PiB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Q2hlY2tib3ggY2hlY2tlZD17ZmFsc2V9IGluZGV0ZXJtaW5hdGUgLz5cblx0XHQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5jaGlsZEF0KDApLnByb3AoJ3N0YXR1cycpKS50b0VxdWFsKCdpbmRldGVybWluYXRlJyk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgcGFzcyB0aGUgY29sb3IgYXMgaXMgd2hlbiBzZXQgdG8gXCJwcmltYXJ5XCInLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQkNoZWNrYm94ID0gZ2V0Q29tcG9uZW50KCdDaGVja2JveCcpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgY29tcG9uZW50cz17eyBDaGVja2JveCB9fT5cblx0XHRcdFx0PEJCQ2hlY2tib3ggY29sb3I9XCJwcmltYXJ5XCIgLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEJCQ2hlY2tib3gpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUb3VjaGFibGVIaWdobGlnaHQnKS5sYXN0KCkucHJvcCgnY29sb3InKSkudG9FcXVhbCgnIzNmNTFiNScpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHBhc3MgdGhlIGNvbG9yIGFzIGlzIHdoZW4gc2V0IHRvIFwic2Vjb25kYXJ5XCInLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQkNoZWNrYm94ID0gZ2V0Q29tcG9uZW50KCdDaGVja2JveCcpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgY29tcG9uZW50cz17eyBDaGVja2JveCB9fT5cblx0XHRcdFx0PEJCQ2hlY2tib3ggY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgQkJDaGVja2JveCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RvdWNoYWJsZUhpZ2hsaWdodCcpLmxhc3QoKS5wcm9wKCdjb2xvcicpKS50b0VxdWFsKCcjZjUwMDU3Jyk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgcGFzcyB0aGUgY29sb3IgYXMgaXMgd2hlbiBzZXQgdG8gXCJkZWZhdWx0XCInLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQkNoZWNrYm94ID0gZ2V0Q29tcG9uZW50KCdDaGVja2JveCcpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgY29tcG9uZW50cz17eyBDaGVja2JveCB9fT5cblx0XHRcdFx0PEJCQ2hlY2tib3ggY29sb3I9XCJkZWZhdWx0XCIgLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEJCQ2hlY2tib3gpO1xuXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUb3VjaGFibGVIaWdobGlnaHQnKS5sYXN0KCkucHJvcCgnY29sb3InKSkudG9FcXVhbCgnJyk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgc2V0IHRoZSBjb2xvciBwcm9wIHRvIHVuZGVmaW5lZCBhbmQgY3JlYXRlIGNsYXNzZXMgZm9yIGN1c3RvbSBjb2xvcnMnLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgQkJDaGVja2JveCA9IGdldENvbXBvbmVudCgnQ2hlY2tib3gnKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIGNvbXBvbmVudHM9e3sgQ2hlY2tib3ggfX0+XG5cdFx0XHRcdDxCQkNoZWNrYm94IGNvbG9yPVwicmVkXCIgLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEJCQ2hlY2tib3gpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUb3VjaGFibGVIaWdobGlnaHQnKS5sYXN0KCkucHJvcCgnY29sb3InKSkudG9FcXVhbCgncmVkJyk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgc2V0IHRoZSBsYWJlbCBjb21wb25lbnQnLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgQkJDaGVja2JveCA9IGdldENvbXBvbmVudCgnQ2hlY2tib3gnKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIGNvbXBvbmVudHM9e3sgQ2hlY2tib3ggfX0+XG5cdFx0XHRcdDxCQkNoZWNrYm94IGxhYmVsPVwiRm9vXCIgLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEJCQ2hlY2tib3gpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCBUZXh0JykubGFzdCgpLnRleHQoKSkudG9FcXVhbCgnRm9vJyk7XG5cdH0pO1xuXG59KTtcblxuXG4iXSwidmVyc2lvbiI6M30=