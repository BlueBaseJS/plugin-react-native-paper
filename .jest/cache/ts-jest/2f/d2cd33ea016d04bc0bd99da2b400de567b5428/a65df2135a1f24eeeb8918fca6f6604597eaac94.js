"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_paper_1 = require("react-native-paper");
const SelectionControl_1 = require("../SelectionControl");
const component_mapper_1 = require("@bluebase/component-mapper");
exports.Radio = component_mapper_1.componentMapper(SelectionControl_1.SelectionControl, {
    ControlComponent: () => react_native_paper_1.RadioButton.Android,
    color: ({ color, styles }) => {
        if (color === 'primary') {
            return styles.primary.color;
        }
        if (color === 'secondary') {
            return styles.secondary.color;
        }
        if (color === 'default') {
            return '';
        }
        return color;
    },
    status: ({ checked }) => (checked === true) ? 'checked' : 'unchecked'
}, {
    ignore: ['checked', 'styles'],
    rest: true,
});
exports.Radio.defaultStyles = (theme) => ({
    primary: { color: theme.palette.primary.main },
    secondary: { color: theme.palette.secondary.main },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9SYWRpby9SYWRpby50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBNkQ7QUFFN0QsMERBQXVEO0FBRXZELGlFQUE2RDtBQUVoRCxRQUFBLEtBQUssR0FBRyxrQ0FBZSxDQUFhLG1DQUFnQixFQUFFO0lBRWxFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLGdDQUFRLENBQUMsT0FBTztJQUV4QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQU8sRUFBRSxFQUFFO1FBQ2pDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN4QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQzFCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDOUI7UUFDRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDeEIsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVc7Q0FDakYsRUFBRTtJQUNGLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFDN0IsSUFBSSxFQUFFLElBQUk7Q0FDVixDQUFDLENBQUM7QUFHRixhQUFhLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7SUFDOUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtDQUNsRCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9SYWRpby9SYWRpby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFkaW9CdXR0b24gYXMgUk5QUmFkaW8gfSBmcm9tICdyZWFjdC1uYXRpdmUtcGFwZXInO1xuaW1wb3J0IHsgUmFkaW9Qcm9wcyB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IFNlbGVjdGlvbkNvbnRyb2wgfSBmcm9tICcuLi9TZWxlY3Rpb25Db250cm9sJztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgY29tcG9uZW50TWFwcGVyIH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudC1tYXBwZXInO1xuXG5leHBvcnQgY29uc3QgUmFkaW8gPSBjb21wb25lbnRNYXBwZXI8UmFkaW9Qcm9wcz4oU2VsZWN0aW9uQ29udHJvbCwge1xuXG5cdENvbnRyb2xDb21wb25lbnQ6ICgpID0+IFJOUFJhZGlvLkFuZHJvaWQsXG5cblx0Y29sb3I6ICh7IGNvbG9yLCBzdHlsZXMgfTogYW55KSA9PiB7XG5cdFx0aWYgKGNvbG9yID09PSAncHJpbWFyeScpIHtcblx0XHRcdHJldHVybiBzdHlsZXMucHJpbWFyeS5jb2xvcjtcblx0XHR9XG5cdFx0aWYgKGNvbG9yID09PSAnc2Vjb25kYXJ5Jykge1xuXHRcdFx0cmV0dXJuIHN0eWxlcy5zZWNvbmRhcnkuY29sb3I7XG5cdFx0fVxuXHRcdGlmIChjb2xvciA9PT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yO1xuXHR9LFxuXG5cdHN0YXR1czogKHsgY2hlY2tlZCB9OiBSYWRpb1Byb3BzKSA9PiAoY2hlY2tlZCA9PT0gdHJ1ZSkgPyAnY2hlY2tlZCcgOiAndW5jaGVja2VkJ1xufSwge1xuXHRpZ25vcmU6IFsnY2hlY2tlZCcsICdzdHlsZXMnXSxcblx0cmVzdDogdHJ1ZSxcbn0pO1xuXG5cbihSYWRpbyBhcyBhbnkpLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xuXHRwcmltYXJ5OiB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiB9LFxuXHRzZWNvbmRhcnk6IHsgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4gfSxcbn0pOyJdLCJ2ZXJzaW9uIjozfQ==