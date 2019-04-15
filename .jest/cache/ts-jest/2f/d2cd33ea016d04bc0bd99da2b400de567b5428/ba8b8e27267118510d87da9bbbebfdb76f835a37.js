"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SelectionControl_1 = require("../SelectionControl");
const react_native_paper_1 = require("react-native-paper");
const component_mapper_1 = require("@bluebase/component-mapper");
exports.Switch = component_mapper_1.componentMapper(SelectionControl_1.SelectionControl, {
    ControlComponent: () => react_native_paper_1.Switch,
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
    value: 'checked'
}, {
    ignore: ['checked', 'styles'],
    rest: true,
});
exports.Switch.defaultStyles = (theme) => ({
    primary: { color: theme.palette.primary.main },
    secondary: { color: theme.palette.secondary.main },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvY29tcG9uZW50cy9Td2l0Y2gvU3dpdGNoLnRzeCIsIm1hcHBpbmdzIjoiOztBQUFBLDBEQUF1RDtBQUN2RCwyREFBeUQ7QUFHekQsaUVBQTZEO0FBRWhELFFBQUEsTUFBTSxHQUFHLGtDQUFlLENBQWMsbUNBQWdCLEVBQUU7SUFFcEUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsMkJBQVM7SUFFakMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFPLEVBQUUsRUFBRTtRQUNqQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDeEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLLEVBQUUsU0FBUztDQUNoQixFQUFFO0lBQ0YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUM3QixJQUFJLEVBQUUsSUFBSTtDQUNWLENBQUMsQ0FBQztBQUdGLGNBQWMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEQsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtJQUM5QyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO0NBQ2xELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYWRuYW4vRGVza3RvcC9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyL3NyYy9jb21wb25lbnRzL1N3aXRjaC9Td2l0Y2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGVjdGlvbkNvbnRyb2wgfSBmcm9tICcuLi9TZWxlY3Rpb25Db250cm9sJztcbmltcG9ydCB7IFN3aXRjaCBhcyBSTlBTd2l0Y2ggfSBmcm9tICdyZWFjdC1uYXRpdmUtcGFwZXInO1xuaW1wb3J0IHsgU3dpdGNoUHJvcHMgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IGNvbXBvbmVudE1hcHBlciB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnQtbWFwcGVyJztcblxuZXhwb3J0IGNvbnN0IFN3aXRjaCA9IGNvbXBvbmVudE1hcHBlcjxTd2l0Y2hQcm9wcz4oU2VsZWN0aW9uQ29udHJvbCwge1xuXG5cdENvbnRyb2xDb21wb25lbnQ6ICgpID0+IFJOUFN3aXRjaCxcblxuXHRjb2xvcjogKHsgY29sb3IsIHN0eWxlcyB9OiBhbnkpID0+IHtcblx0XHRpZiAoY29sb3IgPT09ICdwcmltYXJ5Jykge1xuXHRcdFx0cmV0dXJuIHN0eWxlcy5wcmltYXJ5LmNvbG9yO1xuXHRcdH1cblx0XHRpZiAoY29sb3IgPT09ICdzZWNvbmRhcnknKSB7XG5cdFx0XHRyZXR1cm4gc3R5bGVzLnNlY29uZGFyeS5jb2xvcjtcblx0XHR9XG5cdFx0aWYgKGNvbG9yID09PSAnZGVmYXVsdCcpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3I7XG5cdH0sXG5cblx0dmFsdWU6ICdjaGVja2VkJ1xufSwge1xuXHRpZ25vcmU6IFsnY2hlY2tlZCcsICdzdHlsZXMnXSxcblx0cmVzdDogdHJ1ZSxcbn0pO1xuXG5cbihTd2l0Y2ggYXMgYW55KS5kZWZhdWx0U3R5bGVzID0gKHRoZW1lOiBUaGVtZSkgPT4gKHtcblx0cHJpbWFyeTogeyBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4gfSxcblx0c2Vjb25kYXJ5OiB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluIH0sXG59KTsiXSwidmVyc2lvbiI6M30=