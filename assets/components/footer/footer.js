class copyrioFooter extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 
    `<link rel="stylesheet" type="text/css" href="/assets/components/footer/footer.css">
    <footer>
        <div class="location">
            <img src="/assets/components/footer/location.svg">
            <p> Zona Balvanera. Av. Corrientes 2330 Piso 9° - Oficina 904</p>
        </div>
        <div class="contact">
         <img src="/assets/components/footer/phone.svg">
         <p>+(54)(11)xxxx-xxxx</p>
    </footer>`
    }
}
window.customElements.define("copyrio-footer", copyrioFooter);