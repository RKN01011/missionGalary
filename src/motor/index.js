export function openMenu(e) {
    let arrMenu = document.getElementsByClassName("buyMenu");
    [].forEach.call(arrMenu, (el, id) => {
        (id == e.target.dataset.chose) ?
        (el.className == "buyMenu") ?
        el.classList.add("fullMenu")
        : el.classList.remove("fullMenu")
        : void(0) 
     })
}