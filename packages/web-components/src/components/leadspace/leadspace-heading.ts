/**
 * @license
 *
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, customElement, LitElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import styles from './leadspace.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The heading content of leadspace.
 *
 * @element dds-leadspace-heading
 */
@customElement(`${ddsPrefix}-leadspace-heading`)
class DDSLeadspaceHeading extends LitElement {
  /**
   * The shadow slot this heading content should be in.
   */
  @property({ reflect: true })
  slot = 'heading';

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'heading');
    }
    if (!this.hasAttribute('aria-level')) {
      this.setAttribute('aria-level', '1');
    }
    super.connectedCallback();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

export default DDSLeadspaceHeading;