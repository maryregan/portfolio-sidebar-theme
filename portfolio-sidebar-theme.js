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
    this.title = "Portfolio";
    this.pagenumber = 0;
    this.pages = ["Home", "About", "Projects", "Contact", "Resume"];
  }

  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array },
      title: { type: String },
      pagenumber: { type: Number },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        height: 100vh;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .sidebar {
        width: 200px;
        height: 100vh;
        background-color: #007BFF;
        color: white;
        padding: 20px;
        position: fixed;
        top: 0;
        left: 0;
      }
      .sidebar ul {
        list-style: none;
        padding: 0;
      }
      .sidebar li {
        margin: 10px 0;
      }
      .sidebar a {
        color: white;
        text-decoration: none;
      }
      .sidebar a:hover {
        text-decoration: underline;
      }
      .content {
        margin-left: 220px;
        padding: 20px;
        width: calc(100% - 220px);
        overflow-y: auto;
        height: 100vh;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
      }
      .pages {
        margin: 5px 0;
        padding: 10px;
        background-color: #007BFF;
        color: white;
        text-align: center;
        cursor: pointer;
      }
      .pages:hover {
        background-color: #0056b3;
      }
    `];
  }

  render() {
    return html`
      <div class="sidebar">
        <div class="wrapper">
          ${this.pages.map(page => html`<div class="pages">${page}</div>`)}
        </div>
      </div>
      <div class="content">
        <h1>${this.title}</h1>
        <p>This is the portfolio page content.</p>
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);
