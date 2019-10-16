'use strict';

module.exports = {
  root: true,
  extends: '@extensionengine',
  overrides: [{
    files: ['**/*.test.js'],
    plugins: ['jest'],
    env: {
      jest: true
    }
  }],
};
