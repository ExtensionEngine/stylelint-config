'use strict';

module.exports = {
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-blockless'],
      ignore: ['after-comment', 'inside-block']
    }],
    'function-name-case': 'lower',
    'selector-list-comma-newline-after': 'never-multi-line',
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }],
    'function-comma-space-after': null,
    'order/properties-order': [
      // NOTE: Order is inspired by general rules from https://9elements.com/css-rule-order
      // Generated content
      'content',

      // Position and layout
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',
      'float',

      // Display and visibility
      'display',
      'opacity',
      'transform',

      // Clipping
      'overflow',
      'clip',

      // Animation
      'animation',
      'transition',

      // Box model
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'box-shadow',
      'border',
      'border-radius',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      // Background
      'background',
      'background-color',
      'cursor',

      // Typography
      'font-size',
      'line-height',
      'font-family',
      'font-weight',
      'font-style',
      'text-align',
      'text-transform',
      'word-spacing',
      'color'
    ]
  }
};
