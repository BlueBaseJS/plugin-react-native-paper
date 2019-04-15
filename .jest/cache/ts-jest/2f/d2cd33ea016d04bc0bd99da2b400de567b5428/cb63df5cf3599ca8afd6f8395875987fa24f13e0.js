"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const __1 = require("..");
const enzyme_1 = require("enzyme");
describe('TextInput', () => {
    test('should forward mode=outlined if variant=outlined', () => {
        const component = enzyme_1.shallow(react_1.default.createElement(__1.TextInput, { variant: "outlined" }));
        expect(component.props().mode).toEqual('outlined');
    });
    test('should forward mode=flat if variant !== outlined', () => {
        const component = enzyme_1.shallow(react_1.default.createElement(__1.TextInput, { variant: "filled" }));
        expect(component.props().mode).toEqual('flat');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQvX190ZXN0c19fL1RleHRJbnB1dC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMEI7QUFDMUIsMEJBQStCO0FBQy9CLG1DQUFpQztBQUVqQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtJQUUxQixJQUFJLENBQUMsa0RBQWtELEVBQUUsR0FBRyxFQUFFO1FBQzdELE1BQU0sU0FBUyxHQUFHLGdCQUFPLENBQ3hCLDhCQUFDLGFBQVMsSUFBQyxPQUFPLEVBQUMsVUFBVSxHQUFHLENBQ2hDLENBQUM7UUFDRixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxrREFBa0QsRUFBRSxHQUFHLEVBQUU7UUFDN0QsTUFBTSxTQUFTLEdBQUcsZ0JBQU8sQ0FDeEIsOEJBQUMsYUFBUyxJQUFDLE9BQU8sRUFBQyxRQUFRLEdBQUcsQ0FDOUIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9UZXh0SW5wdXQvX190ZXN0c19fL1RleHRJbnB1dC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XG5cbmRlc2NyaWJlKCdUZXh0SW5wdXQnLCAoKSA9PiB7XG5cblx0dGVzdCgnc2hvdWxkIGZvcndhcmQgbW9kZT1vdXRsaW5lZCBpZiB2YXJpYW50PW91dGxpbmVkJywgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHNoYWxsb3coXG5cdFx0XHQ8VGV4dElucHV0IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG5cdFx0KTtcblx0XHRleHBlY3QoY29tcG9uZW50LnByb3BzKCkubW9kZSkudG9FcXVhbCgnb3V0bGluZWQnKTtcblx0fSk7XG5cblx0dGVzdCgnc2hvdWxkIGZvcndhcmQgbW9kZT1mbGF0IGlmIHZhcmlhbnQgIT09IG91dGxpbmVkJywgKCkgPT4ge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHNoYWxsb3coXG5cdFx0XHQ8VGV4dElucHV0IHZhcmlhbnQ9XCJmaWxsZWRcIiAvPlxuXHRcdCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5wcm9wcygpLm1vZGUpLnRvRXF1YWwoJ2ZsYXQnKTtcblx0fSk7XG5cbn0pO1xuIl0sInZlcnNpb24iOjN9