document.getElementById("btn__open").addEventListener("click", open_close_menu)
//Var
var side_menu = document.getElementById("menu__side");
var btn_open = document.getElementById("btn__open");
var body = document.getElementById("body");

//Mostrar y ocultar menu
    function open_close_menu(){
        body.classList.toggle("body__move");
        side_menu.classList.toggle("menu__side__move");
    }

//Pantalla telefono
    if(window.innerWidth < 760){
        body.classList.add("body__move");
        side_menu.classList.add("menu__side__move");
        }

//responsive
window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        body.classList.remove("body__move");
        side_menu.classList.remove("menu__side__move");
    }

    if(window.innerWidth < 760){
        body.classList.add("body__move");
        side_menu.classList.add("menu__side__move");
    }
});