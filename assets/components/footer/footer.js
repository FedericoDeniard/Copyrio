class copyrioFooter extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = 
    `<link rel="stylesheet" type="text/css" href="../../assets/components/footer/footer.css">
    <footer>
        <a class="location" href="https://maps.app.goo.gl/kVF4MQaP8wNiJtKt9" target="_blank">
            <img src="../../assets/components/footer/location.svg">
            <p> Zona Balvanera. Av. Corrientes 2330 Piso 9° - Oficina 904</p>
        </a>
        <div class="contact">
            <img src="../../assets/components/footer/phone.svg">
            <p>+(54)(11)4951-6582</br>
               +(54)(11)4954-3444</p>
        </div>
        <div class="time">
            <img src="../../assets/components/footer/time.svg">
            <p>Lunes a Viernes de 10:30 a 19:00 Hs.</p>
        </div>
    </footer>`
    }
}
window.customElements.define("copyrio-footer", copyrioFooter);