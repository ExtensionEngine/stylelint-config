'use strict';

/** @type {import('stylelint').Configuration} */
module.exports = {
  extends: [
    'stylelint-config-standard',
    './rules/base'
  ],
  plugins: ['stylelint-scss', 'stylelint-order']
};
