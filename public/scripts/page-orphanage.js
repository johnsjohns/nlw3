const options = {
    dragging:  false,
    touchZoon: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-23.4971759,-46.715966], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon= L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});




L.marker([-23.4971759,-46.715966], {icon})
    .addTo(map)
    


    /* image gallery*/

    function selectImage(event){
        const button = event.currentTarget;
                //remover todas as classe active
        const buttons = document.querySelectorAll(".images button");
        buttons.forEach((button) => {
            button.classList.remove("active");
        });
        //selecionar imagem clicada
        const image = button.children[0];
        const imageContainer = document.querySelector(".orphanage-details > img");
       
        //atualizar o container de imagem
        imageContainer.src = image.src;
        //adicionar a classe .active para esta botão
        button.classList.add("active");
    }