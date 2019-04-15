"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const react_native_paper_1 = require("react-native-paper");
const react_1 = tslib_1.__importDefault(require("react"));
// import { componentMapper } from '@bluebase/component-mapper';
// export const Button = componentMapper<ButtonProps>(RNP_Button, {
// 	mode: 'variant',
// 	// TODO: fix color support
// 	// color: 'color',
// 	// disabled: 'disabled',
// 	// fullWidth: 'fullWidth',
// 	// size: 'size',
// 	// variant: 'variant',
// }, {
// 	ignore: ['color'],
// 	rest: true,
// });
const ButtonComponent = (props) => (react_1.default.createElement(core_1.ThemeConsumer, null, ({ theme }) => {
    const { children, color, title, variant } = props, rest = tslib_1.__rest(props, ["children", "color", "title", "variant"]);
    const rnpColor = (color === 'secondary') ? theme.palette.secondary.main : theme.palette.primary.main;
    return (react_1.default.createElement(react_native_paper_1.Button, Object.assign({}, rest, { mode: variant, color: rnpColor }), children || title));
}));
exports.Button = ButtonComponent;
// export const Button = React.memo(ButtonComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBaUU7QUFDakUsMkRBQTBEO0FBRTFELDBEQUEwQjtBQUMxQixnRUFBZ0U7QUFFaEUsbUVBQW1FO0FBQ25FLG9CQUFvQjtBQUVwQiw4QkFBOEI7QUFDOUIsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1Asc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixNQUFNO0FBR04sTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUMvQyw4QkFBQyxvQkFBYSxRQUNaLENBQUMsRUFBRSxLQUFLLEVBQW9CLEVBQUUsRUFBRTtJQUVoQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxLQUFjLEtBQUssRUFBakIsdUVBQWlCLENBQUM7SUFDM0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBRXJHLE9BQU8sQ0FDTiw4QkFBQywyQkFBVSxvQkFBSyxJQUFJLElBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxLQUFHLFFBQVEsSUFBSSxLQUFLLENBQWMsQ0FDdEYsQ0FBQztBQUNILENBQUMsQ0FDYyxDQUNoQixDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLHFEQUFxRCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYWRuYW4vRGVza3RvcC9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lQ29uc3VtZXIsIFRoZW1lQ29udGV4dERhdGEgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBCdXR0b24gYXMgUk5QX0J1dHRvbiB9IGZyb20gJ3JlYWN0LW5hdGl2ZS1wYXBlcic7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBjb21wb25lbnRNYXBwZXIgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50LW1hcHBlcic7XG5cbi8vIGV4cG9ydCBjb25zdCBCdXR0b24gPSBjb21wb25lbnRNYXBwZXI8QnV0dG9uUHJvcHM+KFJOUF9CdXR0b24sIHtcbi8vIFx0bW9kZTogJ3ZhcmlhbnQnLFxuXG4vLyBcdC8vIFRPRE86IGZpeCBjb2xvciBzdXBwb3J0XG4vLyBcdC8vIGNvbG9yOiAnY29sb3InLFxuLy8gXHQvLyBkaXNhYmxlZDogJ2Rpc2FibGVkJyxcbi8vIFx0Ly8gZnVsbFdpZHRoOiAnZnVsbFdpZHRoJyxcbi8vIFx0Ly8gc2l6ZTogJ3NpemUnLFxuLy8gXHQvLyB2YXJpYW50OiAndmFyaWFudCcsXG4vLyB9LCB7XG4vLyBcdGlnbm9yZTogWydjb2xvciddLFxuLy8gXHRyZXN0OiB0cnVlLFxuLy8gfSk7XG5cblxuY29uc3QgQnV0dG9uQ29tcG9uZW50ID0gKHByb3BzOiBCdXR0b25Qcm9wcykgPT4gKFxuXHQ8VGhlbWVDb25zdW1lcj5cblx0XHR7KHsgdGhlbWUgfTogVGhlbWVDb250ZXh0RGF0YSkgPT4ge1xuXG5cdFx0XHRjb25zdCB7IGNoaWxkcmVuLCBjb2xvciwgdGl0bGUsIHZhcmlhbnQsIC4uLnJlc3QgfSA9IHByb3BzO1xuXHRcdFx0Y29uc3Qgcm5wQ29sb3IgPSAoY29sb3IgPT09ICdzZWNvbmRhcnknKSA/IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4gOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbjtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFJOUF9CdXR0b24gey4uLnJlc3R9IG1vZGU9e3ZhcmlhbnR9IGNvbG9yPXtybnBDb2xvcn0+e2NoaWxkcmVuIHx8IHRpdGxlfTwvUk5QX0J1dHRvbj5cblx0XHRcdCk7XG5cdFx0fX1cblx0PC9UaGVtZUNvbnN1bWVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IEJ1dHRvbkNvbXBvbmVudDtcbi8vIGV4cG9ydCBjb25zdCBCdXR0b24gPSBSZWFjdC5tZW1vKEJ1dHRvbkNvbXBvbmVudCk7XG4iXSwidmVyc2lvbiI6M30=