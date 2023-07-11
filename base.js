'use strict';

/**
 * @type {import('stylelint').Configuration}
 */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    './rules/base'
  ],
  plugins: ['stylelint-order']
};
