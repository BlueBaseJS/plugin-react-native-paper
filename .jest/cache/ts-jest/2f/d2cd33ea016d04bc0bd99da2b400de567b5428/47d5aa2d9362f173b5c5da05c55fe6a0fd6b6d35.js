"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const components_1 = require("@bluebase/components");
const react_1 = tslib_1.__importDefault(require("react"));
const __1 = require("..");
const react_test_renderer_1 = tslib_1.__importDefault(require("react-test-renderer"));
describe('SelectionControl', () => {
    it('should render label on the right', (done) => {
        const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, null,
            react_1.default.createElement(__1.SelectionControl, { label: "foo", ControlComponent: components_1.Noop })));
        setTimeout(() => {
            // expect(rendered).toMatchSnapshot();
            const style = rendered.toJSON().props.style;
            expect(style.flexDirection).toBe('row');
            done();
        });
    });
    it('should render label on the left', (done) => {
        const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, null,
            react_1.default.createElement(__1.SelectionControl, { label: "foo", labelPlacement: "end", ControlComponent: components_1.Noop })));
        setTimeout(() => {
            // expect(rendered).toMatchSnapshot();
            const style = rendered.toJSON().props.style;
            expect(style.flexDirection).toBe('row-reverse');
            done();
        });
    });
    it('should render label on the top', (done) => {
        const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, null,
            react_1.default.createElement(__1.SelectionControl, { label: "foo", labelPlacement: "top", ControlComponent: components_1.Noop })));
        setTimeout(() => {
            // expect(rendered).toMatchSnapshot();
            const style = rendered.toJSON().props.style;
            expect(style.flexDirection).toBe('column');
            done();
        });
    });
    it('should render label on the bottom', (done) => {
        const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, null,
            react_1.default.createElement(__1.SelectionControl, { label: "foo", labelPlacement: "bottom", ControlComponent: components_1.Noop })));
        setTimeout(() => {
            // expect(rendered).toMatchSnapshot();
            const style = rendered.toJSON().props.style;
            expect(style.flexDirection).toBe('column-reverse');
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9TZWxlY3Rpb25Db250cm9sL19fdGVzdHNfXy9TZWxlY3Rpb25Db250cm9sLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxxREFBNEM7QUFDNUMsMERBQTBCO0FBQzFCLDBCQUFzQztBQUN0QyxzRkFBK0M7QUFFL0MsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUdqQyxFQUFFLENBQUMsa0NBQWtDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUUvQyxNQUFNLFFBQVEsR0FBRyw2QkFBWSxDQUFDLE1BQU0sQ0FDbkMsOEJBQUMsa0JBQVc7WUFDWCw4QkFBQyxvQkFBZ0IsSUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFFLGlCQUFJLEdBQUksQ0FDM0MsQ0FDZCxDQUFDO1FBRUYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLHNDQUFzQztZQUV0QyxNQUFNLEtBQUssR0FBVyxRQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFFLEtBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsSUFBSSxFQUFFLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFFOUMsTUFBTSxRQUFRLEdBQUcsNkJBQVksQ0FBQyxNQUFNLENBQ25DLDhCQUFDLGtCQUFXO1lBQ1gsOEJBQUMsb0JBQWdCLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFFLGlCQUFJLEdBQUksQ0FDaEUsQ0FDZCxDQUFDO1FBRUYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLHNDQUFzQztZQUV0QyxNQUFNLEtBQUssR0FBVyxRQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFFLEtBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsSUFBSSxFQUFFLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFFN0MsTUFBTSxRQUFRLEdBQUcsNkJBQVksQ0FBQyxNQUFNLENBQ25DLDhCQUFDLGtCQUFXO1lBQ1gsOEJBQUMsb0JBQWdCLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFFLGlCQUFJLEdBQUksQ0FDaEUsQ0FDZCxDQUFDO1FBRUYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLHNDQUFzQztZQUV0QyxNQUFNLEtBQUssR0FBVyxRQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFFLEtBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsSUFBSSxFQUFFLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFFaEQsTUFBTSxRQUFRLEdBQUcsNkJBQVksQ0FBQyxNQUFNLENBQ25DLDhCQUFDLGtCQUFXO1lBQ1gsOEJBQUMsb0JBQWdCLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFFLGlCQUFJLEdBQUksQ0FDbkUsQ0FDZCxDQUFDO1FBRUYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLHNDQUFzQztZQUV0QyxNQUFNLEtBQUssR0FBVyxRQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFNUQsTUFBTSxDQUFFLEtBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM1RCxJQUFJLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDLENBQUM7QUFFSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYWRuYW4vRGVza3RvcC9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyL3NyYy9jb21wb25lbnRzL1NlbGVjdGlvbkNvbnRyb2wvX190ZXN0c19fL1NlbGVjdGlvbkNvbnRyb2wudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBOb29wIH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdGlvbkNvbnRyb2wgfSBmcm9tICcuLic7XG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuXG5kZXNjcmliZSgnU2VsZWN0aW9uQ29udHJvbCcsICgpID0+IHtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGxhYmVsIG9uIHRoZSByaWdodCcsIChkb25lKSA9PiB7XG5cblx0XHRjb25zdCByZW5kZXJlZCA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHA+XG5cdFx0XHRcdDxTZWxlY3Rpb25Db250cm9sIGxhYmVsPVwiZm9vXCIgQ29udHJvbENvbXBvbmVudD17Tm9vcH0gLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Ly8gZXhwZWN0KHJlbmRlcmVkKS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdFx0Y29uc3Qgc3R5bGU6IGFueVtdID0gKHJlbmRlcmVkIGFzIGFueSkudG9KU09OKCkucHJvcHMuc3R5bGU7XG5cblx0XHRcdGV4cGVjdCgoc3R5bGUgYXMgYW55KS5mbGV4RGlyZWN0aW9uKS50b0JlKCdyb3cnKTtcblx0XHRcdGRvbmUoKTtcblx0XHR9KTtcblxuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGxhYmVsIG9uIHRoZSBsZWZ0JywgKGRvbmUpID0+IHtcblxuXHRcdGNvbnN0IHJlbmRlcmVkID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcblx0XHRcdDxCbHVlQmFzZUFwcD5cblx0XHRcdFx0PFNlbGVjdGlvbkNvbnRyb2wgbGFiZWw9XCJmb29cIiBsYWJlbFBsYWNlbWVudD1cImVuZFwiIENvbnRyb2xDb21wb25lbnQ9e05vb3B9IC8+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdC8vIGV4cGVjdChyZW5kZXJlZCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRcdGNvbnN0IHN0eWxlOiBhbnlbXSA9IChyZW5kZXJlZCBhcyBhbnkpLnRvSlNPTigpLnByb3BzLnN0eWxlO1xuXG5cdFx0XHRleHBlY3QoKHN0eWxlIGFzIGFueSkuZmxleERpcmVjdGlvbikudG9CZSgncm93LXJldmVyc2UnKTtcblx0XHRcdGRvbmUoKTtcblx0XHR9KTtcblxuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGxhYmVsIG9uIHRoZSB0b3AnLCAoZG9uZSkgPT4ge1xuXG5cdFx0Y29uc3QgcmVuZGVyZWQgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuXHRcdFx0PEJsdWVCYXNlQXBwPlxuXHRcdFx0XHQ8U2VsZWN0aW9uQ29udHJvbCBsYWJlbD1cImZvb1wiIGxhYmVsUGxhY2VtZW50PVwidG9wXCIgQ29udHJvbENvbXBvbmVudD17Tm9vcH0gLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Ly8gZXhwZWN0KHJlbmRlcmVkKS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdFx0Y29uc3Qgc3R5bGU6IGFueVtdID0gKHJlbmRlcmVkIGFzIGFueSkudG9KU09OKCkucHJvcHMuc3R5bGU7XG5cblx0XHRcdGV4cGVjdCgoc3R5bGUgYXMgYW55KS5mbGV4RGlyZWN0aW9uKS50b0JlKCdjb2x1bW4nKTtcblx0XHRcdGRvbmUoKTtcblx0XHR9KTtcblxuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGxhYmVsIG9uIHRoZSBib3R0b20nLCAoZG9uZSkgPT4ge1xuXG5cdFx0Y29uc3QgcmVuZGVyZWQgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuXHRcdFx0PEJsdWVCYXNlQXBwPlxuXHRcdFx0XHQ8U2VsZWN0aW9uQ29udHJvbCBsYWJlbD1cImZvb1wiIGxhYmVsUGxhY2VtZW50PVwiYm90dG9tXCIgQ29udHJvbENvbXBvbmVudD17Tm9vcH0gLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Ly8gZXhwZWN0KHJlbmRlcmVkKS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdFx0Y29uc3Qgc3R5bGU6IGFueVtdID0gKHJlbmRlcmVkIGFzIGFueSkudG9KU09OKCkucHJvcHMuc3R5bGU7XG5cblx0XHRcdGV4cGVjdCgoc3R5bGUgYXMgYW55KS5mbGV4RGlyZWN0aW9uKS50b0JlKCdjb2x1bW4tcmV2ZXJzZScpO1xuXHRcdFx0ZG9uZSgpO1xuXHRcdH0pO1xuXG5cdH0pO1xuXG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==