"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@bluebase/core");
const components_1 = require("./components");
const withReactNativePaper_1 = require("./withReactNativePaper");
exports.default = core_1.createPlugin({
    description: 'React Native Paper comes to BlueBase!',
    key: '@bluebase/plugin-react-native-paper',
    name: 'React Native Paper',
    version: '1.0.0',
    components: {
        Avatar: components_1.Avatar,
        Button: components_1.Button,
        Checkbox: components_1.Checkbox,
        Divider: components_1.Divider,
        FormControlLabel: components_1.FormControlLabel,
        FormHelperText: components_1.FormHelperText,
        Radio: components_1.Radio,
        RadioGroup: components_1.RadioGroup,
        Switch: components_1.Switch,
        TextInput: components_1.TextInput,
    },
    filters: {
        'bluebase.boot.end': (bootOptions, _ctx, BB) => {
            BB.Components.addHocs('BlueBaseContent', withReactNativePaper_1.withReactNativePaper);
            return bootOptions;
        },
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FkbmFuL0Rlc2t0b3AvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlci9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBcUU7QUFDckUsNkNBWXNCO0FBQ3RCLGlFQUE4RDtBQUU5RCxrQkFBZSxtQkFBWSxDQUFDO0lBQzNCLFdBQVcsRUFBRSx1Q0FBdUM7SUFDcEQsR0FBRyxFQUFFLHFDQUFxQztJQUMxQyxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRSxPQUFPO0lBRWhCLFVBQVUsRUFBRTtRQUNYLE1BQU0sRUFBTixtQkFBTTtRQUNOLE1BQU0sRUFBTixtQkFBTTtRQUNOLFFBQVEsRUFBUixxQkFBUTtRQUNSLE9BQU8sRUFBUCxvQkFBTztRQUNQLGdCQUFnQixFQUFoQiw2QkFBZ0I7UUFDaEIsY0FBYyxFQUFkLDJCQUFjO1FBQ2QsS0FBSyxFQUFMLGtCQUFLO1FBQ0wsVUFBVSxFQUFWLHVCQUFVO1FBQ1YsTUFBTSxFQUFOLG1CQUFNO1FBQ04sU0FBUyxFQUFULHNCQUFTO0tBQ1Q7SUFFRCxPQUFPLEVBQUU7UUFDUixtQkFBbUIsRUFBRSxDQUFDLFdBQXdCLEVBQUUsSUFBUyxFQUFFLEVBQVksRUFBRSxFQUFFO1lBQzFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLDJDQUFvQixDQUFDLENBQUM7WUFDL0QsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG5hbi9EZXNrdG9wL3BsdWdpbi1yZWFjdC1uYXRpdmUtcGFwZXIvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBCb290T3B0aW9ucywgY3JlYXRlUGx1Z2luIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHtcblx0QXZhdGFyLFxuXHRCdXR0b24sXG5cdENoZWNrYm94LFxuXHREaXZpZGVyLFxuXHRGb3JtQ29udHJvbExhYmVsLFxuXHRGb3JtSGVscGVyVGV4dCxcblx0UmFkaW8sXG5cdFJhZGlvR3JvdXAsXG5cdFN3aXRjaCxcblx0VGV4dElucHV0LFxuXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB3aXRoUmVhY3ROYXRpdmVQYXBlciB9IGZyb20gJy4vd2l0aFJlYWN0TmF0aXZlUGFwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbHVnaW4oe1xuXHRkZXNjcmlwdGlvbjogJ1JlYWN0IE5hdGl2ZSBQYXBlciBjb21lcyB0byBCbHVlQmFzZSEnLFxuXHRrZXk6ICdAYmx1ZWJhc2UvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlcicsXG5cdG5hbWU6ICdSZWFjdCBOYXRpdmUgUGFwZXInLFxuXHR2ZXJzaW9uOiAnMS4wLjAnLFxuXG5cdGNvbXBvbmVudHM6IHtcblx0XHRBdmF0YXIsXG5cdFx0QnV0dG9uLFxuXHRcdENoZWNrYm94LFxuXHRcdERpdmlkZXIsXG5cdFx0Rm9ybUNvbnRyb2xMYWJlbCxcblx0XHRGb3JtSGVscGVyVGV4dCxcblx0XHRSYWRpbyxcblx0XHRSYWRpb0dyb3VwLFxuXHRcdFN3aXRjaCxcblx0XHRUZXh0SW5wdXQsXG5cdH0sXG5cblx0ZmlsdGVyczoge1xuXHRcdCdibHVlYmFzZS5ib290LmVuZCc6IChib290T3B0aW9uczogQm9vdE9wdGlvbnMsIF9jdHg6IGFueSwgQkI6IEJsdWVCYXNlKSA9PiB7XG5cdFx0XHRCQi5Db21wb25lbnRzLmFkZEhvY3MoJ0JsdWVCYXNlQ29udGVudCcsIHdpdGhSZWFjdE5hdGl2ZVBhcGVyKTtcblx0XHRcdHJldHVybiBib290T3B0aW9ucztcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwidmVyc2lvbiI6M30=