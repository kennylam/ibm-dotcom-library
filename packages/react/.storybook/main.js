/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|js)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-links/register',
    '@storybook/addon-options/register',
    '@carbon/storybook-addon-theme/es/register',
    path.resolve(__dirname, 'addon-knobs-args'),
  ],
};
