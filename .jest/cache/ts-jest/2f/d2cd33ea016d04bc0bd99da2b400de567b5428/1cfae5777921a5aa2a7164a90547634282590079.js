"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_paper_1 = require("react-native-paper");
const SelectionControl_1 = require("../SelectionControl");
const component_mapper_1 = require("@bluebase/component-mapper");
exports.Checkbox = component_mapper_1.componentMapper(SelectionControl_1.SelectionControl, {
    ControlComponent: () => react_native_paper_1.Checkbox.Android,
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
    status: ({ checked, indeterminate }) => {
        if (indeterminate === true) {
            return 'indeterminate';
        }
        return checked === true ? 'checked' : 'unchecked';
    }
}, {
    ignore: ['indeterminate', 'checked', 'styles'],
    rest: true,
});
exports.Checkbox.defaultStyles = (theme) => ({
    primary: { color: theme.palette.primary.main },
    secondary: { color: theme.palette.secondary.main },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9DaGVja2JveC9DaGVja2JveC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBNkQ7QUFFN0QsMERBQXVEO0FBRXZELGlFQUE2RDtBQUVoRCxRQUFBLFFBQVEsR0FBRyxrQ0FBZSxDQUFnQixtQ0FBZ0IsRUFBRTtJQUV4RSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyw2QkFBVyxDQUFDLE9BQU87SUFFM0MsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFPLEVBQUUsRUFBRTtRQUNqQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDeEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWlCLEVBQUUsRUFBRTtRQUNyRCxJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDM0IsT0FBTyxlQUFlLENBQUM7U0FDdkI7UUFFRCxPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ25ELENBQUM7Q0FDRCxFQUFFO0lBQ0YsTUFBTSxFQUFFLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFDOUMsSUFBSSxFQUFFLElBQUk7Q0FDVixDQUFDLENBQUM7QUFHRixnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEQsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtJQUM5QyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO0NBQ2xELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYWRuYW4vRGVza3RvcC9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyL3NyYy9jb21wb25lbnRzL0NoZWNrYm94L0NoZWNrYm94LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja2JveCBhcyBSTlBDaGVja2JveCB9IGZyb20gJ3JlYWN0LW5hdGl2ZS1wYXBlcic7XG5pbXBvcnQgeyBDaGVja2JveFByb3BzIH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgU2VsZWN0aW9uQ29udHJvbCB9IGZyb20gJy4uL1NlbGVjdGlvbkNvbnRyb2wnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBjb21wb25lbnRNYXBwZXIgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50LW1hcHBlcic7XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveCA9IGNvbXBvbmVudE1hcHBlcjxDaGVja2JveFByb3BzPihTZWxlY3Rpb25Db250cm9sLCB7XG5cblx0Q29udHJvbENvbXBvbmVudDogKCkgPT4gUk5QQ2hlY2tib3guQW5kcm9pZCxcblxuXHRjb2xvcjogKHsgY29sb3IsIHN0eWxlcyB9OiBhbnkpID0+IHtcblx0XHRpZiAoY29sb3IgPT09ICdwcmltYXJ5Jykge1xuXHRcdFx0cmV0dXJuIHN0eWxlcy5wcmltYXJ5LmNvbG9yO1xuXHRcdH1cblx0XHRpZiAoY29sb3IgPT09ICdzZWNvbmRhcnknKSB7XG5cdFx0XHRyZXR1cm4gc3R5bGVzLnNlY29uZGFyeS5jb2xvcjtcblx0XHR9XG5cdFx0aWYgKGNvbG9yID09PSAnZGVmYXVsdCcpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3I7XG5cdH0sXG5cblx0c3RhdHVzOiAoeyBjaGVja2VkLCBpbmRldGVybWluYXRlIH06IENoZWNrYm94UHJvcHMpID0+IHtcblx0XHRpZiAoaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0cmV0dXJuICdpbmRldGVybWluYXRlJztcblx0XHR9XG5cblx0XHRyZXR1cm4gY2hlY2tlZCA9PT0gdHJ1ZSA/ICdjaGVja2VkJyA6ICd1bmNoZWNrZWQnO1xuXHR9XG59LCB7XG5cdGlnbm9yZTogWydpbmRldGVybWluYXRlJywgJ2NoZWNrZWQnLCAnc3R5bGVzJ10sXG5cdHJlc3Q6IHRydWUsXG59KTtcblxuXG4oQ2hlY2tib3ggYXMgYW55KS5kZWZhdWx0U3R5bGVzID0gKHRoZW1lOiBUaGVtZSkgPT4gKHtcblx0cHJpbWFyeTogeyBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4gfSxcblx0c2Vjb25kYXJ5OiB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluIH0sXG59KTsiXSwidmVyc2lvbiI6M30=