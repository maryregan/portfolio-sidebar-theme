/**
 * Copyright 2025 maryregan
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
/**
 * `portfolio-page`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioPage extends DDDSuper(LitElement) {

    static get tag() {
        return "portfolio-page";
    }

    constructor() {
        super();
        this.title = "";
        this.pagenumber = null;
    }

    static get properties() {
        return {
            ...super.properties,
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
                scroll-snap-type: y mandatory;
                overflow-y: scroll;
                margin: 0;
                padding: 0;
            }
            h1 {
                font-family: var(--ddd-font-navigation);
                font-size: 2em;
                padding: 20px;
            }
            .wrapper {
                height: 100vh;
                scroll-snap-align: start;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                box-sizing: border-box;
            }
        `];
    }

    render() {
        return html`
            <div class="wrapper">
                <h1>${this.title}</h1>
                <slot></slot>
            </div>
        `;
    }
}