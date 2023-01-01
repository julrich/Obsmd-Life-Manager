# Spec
3 Specs: DOM Spec (Living Standard; Shadow DOM), HTML Living Standard (Living Standard; Templates / Slots + HTML Custom Elements), WebComponents > HTML Imports Spec (Working Draft)
WCAG (seit 2004) vs. w3 Standards
https://html.spec.whatwg.org/multipage/scripting.html
## Custom Elements
* CustomElementRegistry.define(DOMString, class, ?extends)
* 2 Arten von custom elements
    1. Autonomous custom elements
    2. Customized built-in elements (aktuell (noch) nicht in Safari, Opera)
* Lifecycle Callbacks (connectedCallBack, disconnectedCallBack, adoptedCallback, attributeChangedCallback)
* Kombination durch Slots / Templates (Inhalt in der Komponente -> geschachteltes HTML)
## Shadow Dom
* shadow root / document root (Sandbox)
* Eigener CSS-Kontext (internal vs. external styles)
## Templates & Slots
* <template id="my-paragraph"> (z.B.: <my-paragraph></my-paragraph> der eigene, interne Styles im Shadow DOM hat)
* <p><slot name="my-text">My default text</slot></p>
* <my-paragraph><span slot="my-text">Let's have some different text!</span></my-paragraph>
 
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description">A placeholder inside a web
    component that users can fill with their own markup,
    with the effect of composing different DOM trees
    together.</span>
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>

# Browser Komaptibilität
* Firefox (63+), Chrome und Opera
* Safari einige, aber nicht alle (z.B. Customized built-in elements)
* Edge: noch keine native Implementierung

# Aktuelle, nutzbare Ansätze
* Kaum Authoring all dieser Punkte mit "nativem" HTML/CSS/JS, meist Bibliothek, Framework, Compiler beteiligt
* Polymer (z.B. lit-element, lit-html; Material UI; Google)
* Stencil (Toolchain für WebComponents; "The magical, reusable web component compiler"; Ionic)
* Svelte (SPA-Framework, SSR)
