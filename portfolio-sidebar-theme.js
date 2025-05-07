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
        height: 100vh;
      }
      ul{
        list-style-type: none;
        padding: 0;
      }
      li{
        margin: 10px 0;
        cursor: pointer;
      }
      li:hover{
        text-decoration: underline;
      }
      .container{
        display:flex;
      }
      
        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #007BFF;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }


    `];
  }

  render() {
    return html`
    <div class="sidebar">
      <h2>${this.title}</h2>
      <ul> ${this.pages.map((page,index) => html` <li @click="${()=> 
      this._navigateToPage(index)}">${page.title}</li>`)}
      </ul>
    </div>
    <button class="back-to-top" @click="${() => this.scrollTo(0, 0)}">Back to Top</button>
    <div class="wrapper">
      <slot></slot>
      </div>
    `;
  }
   _navigateToPage(index) {
     const page = this.shadowRoot.querySelector(`portfolio-page:nth-child(${index + 1})`);
     if (page) {page.scrollIntoView({ behavior: 'smooth' });}
    }
    _scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    firstUpdated() {
      const pages = window.location.hash;
      if(hash){
        const index = parseInt(has.replace('#screen-','')) -1;
        this._navigateToPage(index);
      }
    }
    
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);
