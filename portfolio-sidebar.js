/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-page`
 * 
 * @demo index.html
 * @element portfolio-page
 */
export class PortfolioSidebar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar";  
    }
}