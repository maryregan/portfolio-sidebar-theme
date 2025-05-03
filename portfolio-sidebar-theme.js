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
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
      }
      .sidebar {
        width: 200px;
        height: 800px;
        background-color: black;
        color: black;
        padding: var(--ddd-spacing-2);
      }
      .content{
        flex:1;
        padding:20px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <scroll-button><</scroll-button>
    <div class="sidebar">
      
    <portfolio-sidebar>
        <ul>
        ${this.pages.map(page => html`<li><a href="#${page.toLowerCase()}">${page}</a></li>`)}
        </ul>
    
      </portfolio-sidebar>
    </div>
    <div class = "content"></div>
      
    `;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);