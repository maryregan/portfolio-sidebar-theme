/**
 * Copyright 2025 maryregan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
/*
 * `portfolio-page`
 * 
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioPage extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-page";  
  }

  constructor(){
    super();
    this.title="";
    this.pagenumber=0;
  }
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height:400vh;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
      }
    `;
  }
  render(){
    return html`
      <div class="wrapper">
        <h1>${this.title}</h1>
        <p>This is the portfolio page content.</p>
      </div>`;
  }
  }

  obalThis.customElements.define(PortfolioPage.tag, PortfolioPage);