<p align="center">
  <a href="#">
    <img width="150" src="https://cdn.jsdelivr.net/gh/ExtensionEngine/stylelint-config/media/logo.svg">
  </a>
</p>

# @extensionengine/stylelint-config

[![circleci build
status](https://badgen.net/circleci/github/ExtensionEngine/stylelint-config/master?icon)](https://circleci.com/gh/ExtensionEngine/stylelint-config)
[![npm package
version](https://badgen.net/npm/v/@extensionengine/stylelint-config)](https://npm.im/@extensionengine/stylelint-config)
[![github
license](https://badgen.net/github/license/ExtensionEngine/stylelint-config)](https://github.com/ExtensionEngine/stylelint-config/blob/master/LICENSE)
[![js @extensionengine
style](https://badgen.net/badge/code%20style/@extensionengine/black)](https://github.com/ExtensionEngine/eslint-config)

This package provides Extension Engine's extensible Stylelint config.

## Usage

Package contains two shared Stylelint configs:

### @extensionengine/stylelint-config

This is default configuration supporting `css`, `scss` and Vue.

### @extensionengine/stylelint-config/base

This is base configuration without Vue specific rules.

### Install

Use `install-peerdeps`

```
npx install-peerdeps -D @extensionengine/stylelint-config
```

or the classic way:

```
npm install --save-dev postcss-html postcss-scss stylelint @extensionengine/stylelint-config
```

### Using `@extensionengine/stylelint-config` in your project

In your local `stylelint.config.js` extend this configuration

```js
'use strict';

module.exports = {
  extends: '@extensionengine/stylelint-config'
};
```

If you don't need Vue you can use base configuration:

```js
'use strict';

module.exports = {
  extends: '@extensionengine/stylelint-config/base'
};
```

Check [stylelint documentation](https://stylelint.io/user-guide/rules) for rules
explanation.

### Badge

If you are using this config in your project you can include this badge in a
readme to let people know that your code is using it.

[![style @extensionengine
style](https://badgen.net/badge/stylelint/@extensionengine/black)](https://github.com/ExtensionEngine/stylelint-config)

```markdown
[![style @extensionengine style](https://badgen.net/badge/stylelint/@extensionengine/black)](https://github.com/ExtensionEngine/stylelint-config)
```
