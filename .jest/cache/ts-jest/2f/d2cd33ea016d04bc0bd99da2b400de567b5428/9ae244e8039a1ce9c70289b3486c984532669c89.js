"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const react_native_paper_1 = require("react-native-paper");
const index_1 = tslib_1.__importDefault(require("../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const react_test_renderer_1 = tslib_1.__importDefault(require("react-test-renderer"));
const react_native_1 = require("react-native");
const deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
const Button = core_1.getComponent('Button');
test('Plugin should be correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('@bluebase/plugin-react-native-paper')).toBeTruthy();
});
test('should apply bluebase theme to react native paper components', (done) => {
    const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
        react_1.default.createElement(Button, null, "A Button")));
    setTimeout(() => {
        const props = rendered.root.findByType(react_native_1.Text).props;
        const style = deepmerge_1.default(props.style[0], deepmerge_1.default.all(props.style[1].filter((x) => x !== undefined)));
        expect(style.color).toBe('#3f51b5');
        // expect(rendered).toMatchSnapshot();
        // expect(rendered.toJSON()).toMatchSnapshot();
        done();
    });
});
test('should apply bluebase dark theme to react native paper components', (done) => {
    const configs = {
        'theme.name': 'bluebase-dark'
    };
    const rendered = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, { configs: configs, plugins: [index_1.default] },
        react_1.default.createElement(react_native_paper_1.Card, { testID: "dark-card" },
            react_1.default.createElement(Button, null, "A Button"))));
    setTimeout(() => {
        expect(rendered.toJSON().children[0].props.style.backgroundColor).toBe('#424242');
        done();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFxRTtBQUNyRSwyREFBMEM7QUFDMUMsNkRBQThCO0FBQzlCLDBEQUEwQjtBQUMxQixzRkFBK0M7QUFDL0MsK0NBQW9DO0FBQ3BDLGtFQUFrQztBQUdsQyxNQUFNLE1BQU0sR0FBRyxtQkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXRDLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1RSxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw4REFBOEQsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQzdFLE1BQU0sUUFBUSxHQUFHLDZCQUFZLENBQUMsTUFBTSxDQUNqQyw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sQ0FBQztRQUMvQiw4QkFBQyxNQUFNLG1CQUFrQixDQUNaLENBQ2QsQ0FBQztJQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFFZixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELE1BQU0sS0FBSyxHQUFRLG1CQUFTLENBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2QsbUJBQVMsQ0FBQyxHQUFHLENBQ1osS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FDbEQsQ0FDRCxDQUFDO1FBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsc0NBQXNDO1FBQ3RDLCtDQUErQztRQUMvQyxJQUFJLEVBQUUsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsbUVBQW1FLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUVsRixNQUFNLE9BQU8sR0FBRztRQUNmLFlBQVksRUFBRSxlQUFlO0tBQzdCLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyw2QkFBWSxDQUFDLE1BQU0sQ0FDbkMsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLGVBQU0sQ0FBQztRQUMvQyw4QkFBQyx5QkFBSSxJQUFDLE1BQU0sRUFBQyxXQUFXO1lBQUMsOEJBQUMsTUFBTSxtQkFBa0IsQ0FBTyxDQUM1QyxDQUNkLENBQUM7SUFFRixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2YsTUFBTSxDQUFFLFFBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNGLElBQUksRUFBRSxDQUFDO0lBQ1IsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYWRuYW4vRGVza3RvcC9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIEJsdWVCYXNlQXBwLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAncmVhY3QtbmF0aXZlLXBhcGVyJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcblxuXG5jb25zdCBCdXR0b24gPSBnZXRDb21wb25lbnQoJ0J1dHRvbicpO1xuXG50ZXN0KCdQbHVnaW4gc2hvdWxkIGJlIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdAYmx1ZWJhc2UvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlcicpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxudGVzdCgnc2hvdWxkIGFwcGx5IGJsdWViYXNlIHRoZW1lIHRvIHJlYWN0IG5hdGl2ZSBwYXBlciBjb21wb25lbnRzJywgKGRvbmUpID0+IHtcblx0Y29uc3QgcmVuZGVyZWQgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgIDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHQ8QnV0dG9uPkEgQnV0dG9uPC9CdXR0b24+XG5cdFx0PC9CbHVlQmFzZUFwcD5cblx0KTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdGNvbnN0IHByb3BzID0gcmVuZGVyZWQucm9vdC5maW5kQnlUeXBlKFRleHQpLnByb3BzO1xuXHRcdGNvbnN0IHN0eWxlOiBhbnkgPSBkZWVwbWVyZ2UoXG5cdFx0XHRwcm9wcy5zdHlsZVswXSxcblx0XHRcdGRlZXBtZXJnZS5hbGwoXG5cdFx0XHRcdHByb3BzLnN0eWxlWzFdLmZpbHRlcigoeDogYW55KSA9PiB4ICE9PSB1bmRlZmluZWQpXG5cdFx0XHQpXG5cdFx0KTtcblx0XHRleHBlY3Qoc3R5bGUuY29sb3IpLnRvQmUoJyMzZjUxYjUnKTtcblx0XHQvLyBleHBlY3QocmVuZGVyZWQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdC8vIGV4cGVjdChyZW5kZXJlZC50b0pTT04oKSkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZG9uZSgpO1xuXHR9KTtcbn0pO1xuXG50ZXN0KCdzaG91bGQgYXBwbHkgYmx1ZWJhc2UgZGFyayB0aGVtZSB0byByZWFjdCBuYXRpdmUgcGFwZXIgY29tcG9uZW50cycsIChkb25lKSA9PiB7XG5cblx0Y29uc3QgY29uZmlncyA9IHtcblx0XHQndGhlbWUubmFtZSc6ICdibHVlYmFzZS1kYXJrJ1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlcmVkID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcblx0XHQ8Qmx1ZUJhc2VBcHAgY29uZmlncz17Y29uZmlnc30gcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0PENhcmQgdGVzdElEPVwiZGFyay1jYXJkXCI+PEJ1dHRvbj5BIEJ1dHRvbjwvQnV0dG9uPjwvQ2FyZD5cblx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGV4cGVjdCgocmVuZGVyZWQgYXMgYW55KS50b0pTT04oKS5jaGlsZHJlblswXS5wcm9wcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLnRvQmUoJyM0MjQyNDInKTtcblx0XHRkb25lKCk7XG5cdH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=