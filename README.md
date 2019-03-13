<div align="center">
	<img width=125 height=125 src="assets/common/logo.png">
  <h1>
		BlueBase + React Native Paper
	</h1>
  <p>React Native Paper comes to BlueBase!</p>
</div>

<hr />

## 🎊 Status

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@bluebase/plugin-react-native-paper.svg?style=flat)](https://npmjs.org/package/@bluebase/plugin-react-native-paper "View this project on npm")
[![Build Status](https://travis-ci.com/BlueBaseJS/plugin-react-native-paper.svg?branch=master)](https://travis-ci.com/BlueBaseJS/plugin-react-native-paper)
[![codecov](https://codecov.io/gh/BlueBaseJS/plugin-react-native-paper/branch/master/graph/badge.svg)](https://codecov.io/gh/BlueBaseJS/plugin-react-native-paper)
[![Greenkeeper badge](https://badges.greenkeeper.io/BlueBaseJS/plugin-react-native-paper.svg)](https://greenkeeper.io/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BlueBaseJS/plugin-react-native-paper/blob/master/CONTRIBUTING.md)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3c79162871414b6aa7c15d1a423adeca)](https://www.codacy.com/app/BlueBaseJS/plugin-react-native-paper?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BlueBaseJS/plugin-react-native-paper&amp;utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/BlueBaseJS/plugin-react-native-paper/badge.svg)](https://snyk.io/test/github/BlueBaseJS/plugin-react-native-paper)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## 🤝 Compatibility

| 🌏 Web | 🖥 Electron | 📱 React Native |
| :---: | :--------: | :------------: |
|❌|❌|✅|

## Docs

- [Storybook](https://BlueBaseJS.github.io/plugin-react-native-paper/storybook/)
- [API Docs](https://BlueBaseJS.github.io/plugin-react-native-paper/)

## Installation

Install the plugin as a dependency in your project:

```bash
yarn add @bluebase/plugin-react-native-paper
```

The easiest way to add a new plugin is pass it as a prop to the `BlueBaseApp` component.

```ts
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '@bluebase/plugin-react-native-paper';

export const App = () => (
  <BlueBaseApp plugins={[Plugin]} />
);
```

Typically, in a large project you would be using BlueBase CLI. In your BlueBase project created by the CLI, add the plugin in the `plugins` field in your `bluebase.ts` file:

```ts
export default {

    // ...other bluebase.ts properties

    plugins: [
			import('@bluebase/plugin-react-native-paper')
		]
}
```

## Components

This plugin registers following plugins in BlueBase:

- [x] Button
- [x] Divider
- [x] TextInput
