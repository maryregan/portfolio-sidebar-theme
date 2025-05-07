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
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
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
        scroll-behavior:smooth;
      }
      ul{
        list-style-type: none;
        padding: 0;
      }
      .container{
        display:flex;
      }
    `];
  }

  render() {
    return html`
    <div class="sidebar">
    </div>
    <div class="wrapper">
      <slot></slot>
      </div>
    `;
  }

  _navigateToPage(index) {
    this.pagenumber = index;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);
