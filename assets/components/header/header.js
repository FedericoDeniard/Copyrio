class copyrioHeader extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 
    `<link rel="stylesheet" type="text/css" href="../../assets/components/header/header.css">
    <header>
        <h1><a href="./index.html">COPYRIO</a></h1>
    </header>`
    }
}
window.customElements.define("copyrio-header", copyrioHeader);