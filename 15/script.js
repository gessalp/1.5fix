function readMore() {
    var blockMenu = document.getElementById("menu");
    var menuBtn = document.getElementById("samsung");
    var btn = document.getElementById("btn");
    var logo = document.getElementById("logo");
    
    if (blockMenu.childElementCount < 9){
        for (i=0; i<3; i++){
        var cloneMenuBtn = menuBtn.cloneNode(true);
        blockMenu.appendChild(cloneMenuBtn);
        btn.innerHTML = "Скрыть";
        logo.style.transform = "rotate(180deg)";
    }
    } else {
        for (i=0; i<3; i++) {
            document.getElementById("samsung").remove();
            btn.innerHTML = "Показать все";
            logo.style.transform = "rotate(0deg)";
        }
    }
}