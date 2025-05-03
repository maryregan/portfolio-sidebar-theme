/**
 * Copyright 2025 maryregan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.pages = ["About","Contact"];
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
      }
      .sidebar {
        width: 200px;
        height: 100vh;
        background-color: #007BFF;
        color: white;
        padding: 20px;
        position: fixed;
      }
      .content{
        margin-left: 220px;
        padding:20px;
        width: calc(100% - 220px);
      }
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="sidebar">
        <ul>
        ${this.pages.map(page => html`<li><a href="#${page.toLowerCase()}">${page}</a></li>`)}
        </ul>
    </div>
    <div class = "content">
    <slot></slot>
    </div>
    `;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);