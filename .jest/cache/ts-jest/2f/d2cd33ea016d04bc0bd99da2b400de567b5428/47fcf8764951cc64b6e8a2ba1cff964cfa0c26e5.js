"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const components_1 = require("@bluebase/components");
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const react_test_renderer_1 = tslib_1.__importDefault(require("react-test-renderer"));
const deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
describe('android enviornment', () => {
    test('Divider component with inset prop=true', (done) => {
        const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(components_1.Divider, { inset: true })));
        setTimeout(() => {
            // expect(rendered).toMatchSnapshot();
            const styleProp = rendered.toJSON().children[0].props.style;
            const style = deepmerge_1.default.all(styleProp.filter(x => x !== undefined));
            expect(style.marginLeft).toBeGreaterThan(0);
            done();
        });
    });
    test('Divider component with inset prop=false', (done) => {
        const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(components_1.Divider, { inset: false })));
        setTimeout(() => {
            // expect(rendered).toMatchSnapshot();
            const styleProp = rendered.toJSON().children[0].props.style;
            const style = deepmerge_1.default.all(styleProp.filter(x => x !== undefined));
            expect(style.marginLeft).toBeUndefined();
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9EaXZpZGVyL19fdGVzdHNfXy9EaXZpZGVyLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxxREFBK0M7QUFDL0MsbUVBQW9DO0FBQ3BDLDBEQUEwQjtBQUMxQixzRkFBK0M7QUFDL0Msa0VBQWtDO0FBRWxDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUU7SUFFcEMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFFdkQsTUFBTSxRQUFRLEdBQUcsNkJBQVksQ0FBQyxNQUFNLENBQ25DLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLG9CQUFPLElBQUMsS0FBSyxFQUFFLElBQUksR0FBSSxDQUNYLENBQ2QsQ0FBQztRQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixzQ0FBc0M7WUFFdEMsTUFBTSxTQUFTLEdBQVcsUUFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM1RSxNQUFNLEtBQUssR0FBRyxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFcEUsTUFBTSxDQUFFLEtBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxFQUFFLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFFeEQsTUFBTSxRQUFRLEdBQUcsNkJBQVksQ0FBQyxNQUFNLENBQ25DLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLG9CQUFPLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUNaLENBQ2QsQ0FBQztRQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixzQ0FBc0M7WUFFdEMsTUFBTSxTQUFTLEdBQVcsUUFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM1RSxNQUFNLEtBQUssR0FBRyxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFcEUsTUFBTSxDQUFFLEtBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNsRCxJQUFJLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDLENBQUM7QUFFSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYWRuYW4vRGVza3RvcC9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyL3NyYy9jb21wb25lbnRzL0RpdmlkZXIvX190ZXN0c19fL0RpdmlkZXIudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcblxuZGVzY3JpYmUoJ2FuZHJvaWQgZW52aW9ybm1lbnQnLCAoKSA9PiB7XG5cblx0dGVzdCgnRGl2aWRlciBjb21wb25lbnQgd2l0aCBpbnNldCBwcm9wPXRydWUnLCAoZG9uZSkgPT4ge1xuXG5cdFx0Y29uc3QgcmVuZGVyZWQgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PERpdmlkZXIgaW5zZXQ9e3RydWV9IC8+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdC8vIGV4cGVjdChyZW5kZXJlZCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRcdGNvbnN0IHN0eWxlUHJvcDogYW55W10gPSAocmVuZGVyZWQgYXMgYW55KS50b0pTT04oKS5jaGlsZHJlblswXS5wcm9wcy5zdHlsZTtcblx0XHRcdGNvbnN0IHN0eWxlID0gZGVlcG1lcmdlLmFsbChzdHlsZVByb3AuZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKSk7XG5cblx0XHRcdGV4cGVjdCgoc3R5bGUgYXMgYW55KS5tYXJnaW5MZWZ0KS50b0JlR3JlYXRlclRoYW4oMCk7XG5cdFx0XHRkb25lKCk7XG5cdFx0fSk7XG5cblx0fSk7XG5cblx0dGVzdCgnRGl2aWRlciBjb21wb25lbnQgd2l0aCBpbnNldCBwcm9wPWZhbHNlJywgKGRvbmUpID0+IHtcblxuXHRcdGNvbnN0IHJlbmRlcmVkID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxEaXZpZGVyIGluc2V0PXtmYWxzZX0gLz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Ly8gZXhwZWN0KHJlbmRlcmVkKS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdFx0Y29uc3Qgc3R5bGVQcm9wOiBhbnlbXSA9IChyZW5kZXJlZCBhcyBhbnkpLnRvSlNPTigpLmNoaWxkcmVuWzBdLnByb3BzLnN0eWxlO1xuXHRcdFx0Y29uc3Qgc3R5bGUgPSBkZWVwbWVyZ2UuYWxsKHN0eWxlUHJvcC5maWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpKTtcblxuXHRcdFx0ZXhwZWN0KChzdHlsZSBhcyBhbnkpLm1hcmdpbkxlZnQpLnRvQmVVbmRlZmluZWQoKTtcblx0XHRcdGRvbmUoKTtcblx0XHR9KTtcblxuXHR9KTtcblxufSk7XG4iXSwidmVyc2lvbiI6M30=