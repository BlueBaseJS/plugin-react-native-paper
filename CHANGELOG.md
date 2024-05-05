## [4.2.3](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.2.2...v4.2.3) (2024-05-05)

### Bug Fixes

-   **MenuItem:** Fixed icon position ([642d596](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/642d596450d58d460837775b634fa28579615094))

## [4.2.2](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.2.1...v4.2.2) (2024-05-05)

### Bug Fixes

-   **ListItem:** Dont wrap description in Text if it is not a string ([657c4d8](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/657c4d8e7b61593a128d537a3203ad2dafc55663))

## [4.2.1](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.2.0...v4.2.1) (2024-04-04)

### Bug Fixes

-   Fixed CI ([6c8fdbe](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/6c8fdbe5ca76523fa574362b6a51d8ca8a19ca7c))

# [4.2.0](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.1.0...v4.2.0) (2024-04-04)

### Features

-   Added icon to MenuItem ([306c9a6](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/306c9a6ef7726de9b1cecfe9615799f1c82fdb1c))

# [4.1.0](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.0.3...v4.1.0) (2023-09-09)

### Features

-   Expo 49 ([25affce](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/25affce5803a53a440b8fe3204b22d309b133cef))

## [4.0.3](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.0.2...v4.0.3) (2022-08-30)

### Bug Fixes

-   **Divider:** Improved styles ([fb0aece](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/fb0aece))

## [4.0.2](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.0.1...v4.0.2) (2022-08-30)

### Bug Fixes

-   **ListItem:** Fixed left & right props ([c0b6beb](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/c0b6beb))

## [4.0.1](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v4.0.0...v4.0.1) (2022-08-30)

### Bug Fixes

-   **ListItem:** Fixed a crash on List.Item left prop ([a4721db](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/a4721db))

# [4.0.0](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v3.1.1...v4.0.0) (2022-07-19)

### Bug Fixes

-   **selectListItem:** fix selected list item ([84688b7](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/84688b7))
-   **styles:** styles ([cc71d1c](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/cc71d1c))
-   **styles:** styles ([2e6bfa0](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/2e6bfa0))
-   **theme:** theme check ([ae427d5](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/ae427d5))

### chore

-   Moved Picker & Slider to community modules ([d3a367c](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/d3a367c))

### Features

-   Added TextInput.Icon & TextInput.Affix ([f0028d8](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/f0028d8))

### BREAKING CHANGES

-   Moved Picker & Slider to community modules, since they are deprecated in the react-native package

# [4.0.0-beta.1](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v3.1.1...v4.0.0-beta.1) (2021-10-31)

### Bug Fixes

-   **selectListItem:** fix selected list item ([84688b7](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/84688b7))
-   **styles:** styles ([cc71d1c](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/cc71d1c))
-   **styles:** styles ([2e6bfa0](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/2e6bfa0))
-   **theme:** theme check ([ae427d5](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/ae427d5))

### chore

-   Moved Picker & Slider to community modules ([d3a367c](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/d3a367c))

### BREAKING CHANGES

-   Moved Picker & Slider to community modules, since they are deprecated in the react-native package

## [3.1.1](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v3.1.0...v3.1.1) (2020-09-13)

### Bug Fixes

-   **Fonts:** Removed useless Fonts folder ([a8cb4e9](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/a8cb4e9))

# [3.1.0](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v3.0.0...v3.1.0) (2020-08-07)

### Features

-   **TablePagination:** Implemented as per spec ([9ae4935](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/9ae4935))

# [3.0.0](https://github.com/BlueBaseJS/plugin-react-native-paper/compare/v2.4.0...v3.0.0) (2020-08-04)

### chore

-   Doesn't register it's own font anymore ([7c33764](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/7c33764))

### Features

-   Added markdown linting ([4ad6e99](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/4ad6e99))
-   Updated to react-native-paper@v4 ([fedb909](https://github.com/BlueBaseJS/plugin-react-native-paper/commit/fedb909))

### BREAKING CHANGES

-   Bumped core library to V4
-   The plugin doesn't register it's own MaterialIcons font anymore. Although it was redundant, but we're still marking this as a breaking change.
