/**
 * Copyright 2025 maryregan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

class FixedElement extends DDDSuper(LitElement) {
  static get tag() {
    return "fixed-element";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        background-color: black;
        color: black;
        text-align: center;
        border-radius: 50%;
        z-index: 1000;
      }
      .symbol {
        font-size: 24px;
        line-height: 40px;
      }
    `;
  }

  render() {
    return html`
      <div class="symbol">★</div>
    `;
  }
}

customElements.define(FixedElement.tag, FixedElement);
