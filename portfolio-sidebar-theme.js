/**
 * Copyright 2025 maryregan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.title = "Portfolio";
    this.pagenumber = 0;
    this.pages = [
      { title: "Home", number: 0 },
      { title: "About", number: 1 },
      { title: "Projects", number: 2 },
      { title: "Contact", number: 3 },
      { title: "Resume", number: 4 }
    ];
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
        display: block;
        height: 100vh;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .sidebar {
        display:block;
        width: 310px;
        background-color: #007BFF;
        color: var(--portfolio-sidebar-color,white);
        position: fixed;
        text-align: center;
        top: 0;
        bottom: 0;
        left: 0;
      }
      .wrapper {
        margin-left: 310px;
      }
      ul{
        list-style-type: none;
        padding: 0;
      }
    `];
  }

  render() {
    return html`
    <scroll-button></scroll-button>
      
    <div class=sidebar>
      <ul>
      ${this.pages.map((page, index) => html`<li><a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">${page.title}</a></li>`)}
      </ul>
    </div>
    <div class="wrapper">
      <h1>${this.title}</h1>
      <slot></slot>
      </div>
    `;
  }

  _navigateToPage(index) {
    this.pagenumber = index;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);
