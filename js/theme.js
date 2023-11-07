//Trocar tema===================================================
const btnTheme = document.querySelector(".btnTheme");
const themeSystem = localStorage.getItem("themeSystem") || "light";

btnTheme.addEventListener('click', () =>{
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "light" ? "dark" : "light";
    localStorage.setItem("themeSystem",newTheme);
    atualizarTema(newTheme)
    
})

function atualizarTema(theme){
    document.documentElement.setAttribute("data-theme", theme);
    if(theme == "dark"){
        btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }else{
        btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
}

atualizarTema(themeSystem)

