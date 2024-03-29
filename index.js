'use strict';

/**
 * @type {import('stylelint').Configuration}
 */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    './rules/base'
  ],
  plugins: ['stylelint-order']
};
