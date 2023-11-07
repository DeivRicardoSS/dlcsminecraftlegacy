


//Trocar de Categorias=========================================
const categoriaTexture = document.getElementById("categ1");
const categoriaSkins = document.getElementById("categ2");
const categoriaMaps = document.getElementById("categ3");

const sectionTexturePacks = document.querySelector(".texturepacks");
const sectionSkinPacks = document.querySelector(".skinpacks");
const sectionMaps = document.querySelector(".maps");



function cat1() {

    sectionTexturePacks.style.display = "flex";
    sectionSkinPacks.style.display = "none";
    sectionMaps.style.display = "none";

    categoriaTexture.classList.add("ativo");
    categoriaSkins.classList.remove("ativo");
    categoriaMaps.classList.remove("ativo");
}
function cat2() {
    sectionTexturePacks.style.display = "none";
    sectionSkinPacks.style.display = "flex";
    sectionMaps.style.display = "none";

    categoriaTexture.classList.remove("ativo");
    categoriaSkins.classList.add("ativo");
    categoriaMaps.classList.remove("ativo");
}
function cat3() {
    sectionTexturePacks.style.display = "none";
    sectionSkinPacks.style.display = "none";
    sectionMaps.style.display = "flex";

    categoriaTexture.classList.remove("ativo");
    categoriaSkins.classList.remove("ativo");
    categoriaMaps.classList.add("ativo");
}
//===========================================================





function mudarpagina1(p) {


    const txtpagina1 = document.querySelector(".texturepacks .pg1");
    const txtpagina2 = document.querySelector(".texturepacks .pg2");
    // const txtpagina3 = document.querySelector(".texturepacks .pg3");
    // const txtpagina4 = document.querySelector(".texturepacks .pg4");

    const sknpagina1 = document.querySelector(".skinpacks .pg1");
    const sknpagina2 = document.querySelector(".skinpacks .pg2");
    // const sknpagina3 = document.querySelector(".skinpacks .pg3");
    // const sknpagina4 = document.querySelector(".skinpacks .pg4");

    const mpspagina1 = document.querySelector(".maps .pg1");
    // const mpspagina2 = document.querySelector(".maps .pg2");
    // const mpspagina3 = document.querySelector(".maps .pg3");
    // const mpspagina4 = document.querySelector(".maps .pg4");


    if (p == 1) {
        txtpagina1.style.display = "grid";
        txtpagina2.style.display = "none";
        // txtpagina3.style.display = "none";
        // txtpagina4.style.display = "none";
    }
    if (p == 2) {
        sknpagina1.style.display = "grid";
        sknpagina2.style.display = "none";
        // sknpagina3.style.display = "none";
        // sknpagina4.style.display = "none";
    }
    if (p == 3) {
        mpspagina1.style.display = "grid";
        // mpspagina2.style.display = "none";
        // mpspagina3.style.display = "none";
        // mpspagina4.style.display = "none";
    }


}
function mudarpagina2(p) {


    const txtpagina1 = document.querySelector(".texturepacks .pg1");
    const txtpagina2 = document.querySelector(".texturepacks .pg2");
    // const txtpagina3 = document.querySelector(".texturepacks .pg3");
    // const txtpagina4 = document.querySelector(".texturepacks .pg4");

    const sknpagina1 = document.querySelector(".skinpacks .pg1");
    const sknpagina2 = document.querySelector(".skinpacks .pg2");
    // const sknpagina3 = document.querySelector(".skinpacks .pg3");
    // const sknpagina4 = document.querySelector(".skinpacks .pg4");

    const mpspagina1 = document.querySelector(".maps .pg1");
    // const mpspagina2 = document.querySelector(".maps .pg2");
    // const mpspagina3 = document.querySelector(".maps .pg3");
    // const mpspagina4 = document.querySelector(".maps .pg4");


    if (p == 1) {
        txtpagina1.style.display = "none";
        txtpagina2.style.display = "grid";
        // txtpagina3.style.display = "none";
        // txtpagina4.style.display = "none";
    }

    if (p == 2) {
        sknpagina1.style.display = "none";
        sknpagina2.style.display = "grid";
        // sknpagina3.style.display = "none";
        // sknpagina4.style.display = "none";
    }

    if (p == 3) {
        mpspagina1.style.display = "none";
        // mpspagina2.style.display = "grid";
        // mpspagina3.style.display = "none";
        // mpspagina4.style.display = "none";
    }


}
function mudarpagina3(p) {


    const txtpagina1 = document.querySelector(".texturepacks .pg1");
    const txtpagina2 = document.querySelector(".texturepacks .pg2");
    // const txtpagina3 = document.querySelector(".texturepacks .pg3");
    // const txtpagina4 = document.querySelector(".texturepacks .pg4");

    const sknpagina1 = document.querySelector(".skinpacks .pg1");
    const sknpagina2 = document.querySelector(".skinpacks .pg2");
    // const sknpagina3 = document.querySelector(".skinpacks .pg3");
    // const sknpagina4 = document.querySelector(".skinpacks .pg4");

    const mpspagina1 = document.querySelector(".maps .pg1");
    // const mpspagina2 = document.querySelector(".maps .pg2");
    // const mpspagina3 = document.querySelector(".maps .pg3");
    // const mpspagina4 = document.querySelector(".maps .pg4");

    if (p == 1) {
        txtpagina1.style.display = "none";
        txtpagina2.style.display = "none";
        // txtpagina3.style.display = "none";
        // txtpagina4.style.display = "grid";
    }
    if (p == 2) {
        sknpagina1.style.display = "none";
        sknpagina2.style.display = "none";
        // sknpagina3.style.display = "none";
        // sknpagina4.style.display = "grid";
    }

    if (p == 3) {
        mpspagina1.style.display = "none";
        // mpspagina2.style.display = "none";
        // mpspagina3.style.display = "none";
        // mpspagina4.style.display = "grid";
    }


}

