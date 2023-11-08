const donateArea = document.querySelector("#donateArea");
const donateBox = document.querySelector("#donateBox");

function abrirDonate(){
    donateArea.classList.remove("donate-area");
    donateArea.classList.add("bkg-ativo");
    donateBox.classList.remove("donatebox");
    donateBox.classList.add("dntb-ativo");
}

function fecharDonate(){
    donateArea.classList.remove("bkg-ativo");
    donateArea.classList.add("donate-area");
    donateBox.classList.remove("dntb-ativo");
    donateBox.classList.add("donatebox");
    
}












const obRedrect = localStorage.getItem("objecttoredirect") || "vazio";



//============================OBJETOS DA CLASSE USUARIOS=============================================================================
class Users {
    constructor(username, bio, social1, social2, social3, userimg, donate) {
        this.username = username;
        this.bio = bio;
        this.social1 = social1;
        this.social2 = social2;
        this.social3 = social3;
        this.userimg = userimg;
        this.donate = donate;
    }
}

const usr1 = new Users("DeivHD", `
    Olá! Sou Deivyson Ricardo, um jovem amador do minecraft LCE (Minecraft Legacy Edition). Tenho como
    objetivo, melhorar a experiência dos jogadores ao jogar nessa versão do minecraft, mostrando que
    mesmo sendo uma versão antiga e única do minecraft, não devemos deixa-las no esquecimento. Espero
    que goste das minhas DLCs. Obrigado!
`, "<a href='https://www.instagram.com/deivyson_2005/'><i class='fa-brands fa-instagram'></i></a>", "<a href='https://github.com/deivricardoss'><i class='fa-brands fa-github'></i></a>", "<a href='https://discord.gg/9qMaMm5F'><i class='fa-brands fa-discord'></i></a>", "img/users/deivyson.png", "img/donate/PixDeivHD.png");

const usr2 = new Users("MW", `
Eaew, sou MathuwsGamerMW! Modder que cria conteúdos extras para Minecraft Legacy Edition, como DLC e mapas super extraordinários para toda a comunidade.
`, "<a href='https://m.facebook.com/profile.php/?id=100040792420270&name=xhp_nt__fb__action__open_user'><i class='fa-brands fa-facebook'></i></a>", "<a href='https://www.youtube.com/@MathuwsGamerMW'><i class='fa-brands fa-youtube'></i></a>", "<a href='https://discord.gg/9qMaMm5F'><i class='fa-brands fa-discord'></i></a>", "img/users/MW.jpg", "img/donate/PixMW.png");

const usr3 = new Users("JanpiYT", `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam ab corrupti dolore aliquid, architecto optio, corporis natus vitae, doloribus ut aut sapiente. Eaque vel cumque facere, omnis quidem deserunt.
`, "<a href='https://m.facebook.com/profile.php/?id=100040792420270&name=xhp_nt__fb__action__open_user'><i class='fa-brands fa-facebook'></i></a>", "<a href='https://www.youtube.com/@janpiyt'><i class='fa-brands fa-youtube'></i></a>", "<a href='https://discord.gg/9qMaMm5F'><i class='fa-brands fa-discord'></i></a>", "img/users/janpiYT.jpg", "img/donate/unset.png");

const usr4 = new Users("BLN", `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam ab corrupti dolore aliquid, architecto optio, corporis natus vitae, doloribus ut aut sapiente. Eaque vel cumque facere, omnis quidem deserunt.
`, "<a href='https://m.facebook.com/profile.php/?id=100040792420270&name=xhp_nt__fb__action__open_user'><i class='fa-brands fa-facebook'></i></a>", "<a href='https://www.youtube.com/@MathuwsGamerMW'><i class='fa-brands fa-youtube'></i></a>", "<a href='https://discord.gg/9qMaMm5F'><i class='fa-brands fa-discord'></i></a>", "img/users/BLN.jpg", "img/donate/unset.png");

const usr5 = new Users("Nobledez", `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam ab corrupti dolore aliquid, architecto optio, corporis natus vitae, doloribus ut aut sapiente. Eaque vel cumque facere, omnis quidem deserunt.
`, "<a href='https://m.facebook.com/profile.php/?id=100040792420270&name=xhp_nt__fb__action__open_user'><i class='fa-brands fa-facebook'></i></a>", "<a href='https://www.youtube.com/@MathuwsGamerMW'><i class='fa-brands fa-youtube'></i></a>", "<a href='https://discord.gg/9qMaMm5F'><i class='fa-brands fa-discord'></i></a>", "img/users/nobledez.png", "img/donate/unset.png");



const usrcontainer = document.querySelector(".colaboradores");



const usrobjetos = [usr1, usr2, usr3, usr4, usr5];
if (document.title === "MineXb360 MarketPlace") {
    usrobjetos.forEach(objeto => {
        const div = document.createElement("div");
        div.classList.add("user-container")
        
        div.innerHTML = `
        
        <img src="${objeto.userimg}" alt="">
        <h4>${objeto.username}</h4>
        <div class="user-container-redes">
        ${objeto.social1}
        ${objeto.social2}
        ${objeto.social3}

        </div>
    
    `;
        usrcontainer.appendChild(div);

    });
}





//==============================================================================================================================================


//============================OBJETOS DA CLASSE TEXTUREPACKS=============================================================================
class TexturePacks {
    constructor(titulo, desc, download, criador, img1, img2, img3, img4, img5, img6, userimg) {
        this.titulo = titulo;
        this.desc = desc;
        this.download = download;
        this.criador = criador;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;
        this.userimg = userimg;

    }
}

const txt0 = new TexturePacks("Better Vanilla 2.0", `
        <p>A textura "Better Vanilla 2.0" é uma emocionante evolução no mundo de texturas para o Minecraft, atualmente em sua versão beta. Esta textura representa um salto notável em termos de qualidade visual e detalhes, passando de uma resolução 16x para uma incrível 32x. Essa mudança para uma resolução mais alta permite que os jogadores desfrutem de uma experiência de jogo mais imersiva e rica em detalhes, que dá vida ao mundo do Minecraft de maneiras surpreendentes.</p>
        <p>O objetivo central desta textura é aprimorar a jogabilidade no modo sobrevivência, tornando a jornada dos jogadores ainda mais envolvente e realista. Cada bloco, item e entidade no jogo foi meticulosamente retrabalhado para oferecer uma sensação de autenticidade e beleza única. A "Better Vanilla 2.0" se destaca por seu compromisso com o equilíbrio entre a estética e a funcionalidade, tornando o Minecraft mais desafiador e gratificante.</p>
        <p>As texturas de terreno ganham vida com detalhes impressionantes, desde a vegetação mais densa até as estruturas de pedra e madeira, criando uma paisagem que parece mais natural e rica em texturas. Itens, como ferramentas e armaduras, apresentam detalhes incríveis, e cada um deles parece ter sido habilmente feito à mão. Até mesmo os mobs e animais receberam uma transformação visual, tornando o encontro com eles ainda mais envolvente.</p>
        <p>Essa textura é ideal para jogadores que desejam elevar sua experiência de jogo a um novo patamar, mantendo a essência do Minecraft. Ela não apenas melhora a qualidade visual do jogo, mas também ajuda a criar uma atmosfera mais imersiva e rica em detalhes. Prepare-se para explorar um mundo voxel como nunca antes, onde cada bloco conta uma história e cada aventura é uma jornada emocionante em busca de sobrevivência e criatividade. A "Better Vanilla 2.0" promete ser uma textura inovadora que revitaliza o mundo do Minecraft e oferece uma experiência única a todos os jogadores.</p>
`, "https://www.mediafire.com/file/g3sc65lw8e28s59/Better_Vanilla_2_Beta/file", "DeivHD", "img/capas/bettervanilla.webp", "img/capas/bv2%20(1).png", "img/capas/bv2%20(2).png", "img/capas/bv2%20(3).png", "img/capas/bv2%20(4).png", "img/capas/bv2%20(5).png", "img/users/deivyson.png");

const txt1 = new TexturePacks("Better Vanilla", `
<p>A textura "Better Vanilla" na sua versão oficial para o Xbox 360 é uma adição notável para os jogadores que desejam preservar a essência original do Minecraft, enquanto acrescentam um toque de beleza e autenticidade ao jogo. Com uma resolução de 16x, esta textura oferece uma experiência agradável e suave, perfeita para os jogadores que procuram manter a jogabilidade característica do Minecraft no console.</p>
<p>O principal objetivo da "Better Vanilla" é trazer um aspecto natural e refinado ao mundo do Minecraft, sem comprometer a estética original do jogo. Os blocos, itens e entidades foram cuidadosamente redesenhados para realçar os detalhes e proporcionar um toque de realismo. O resultado é uma textura que se sente orgânica, mas ainda mantém o charme característico da estética "vanilla".</p>
<p>Os terrenos ganham um novo aspecto, com texturas que se assemelham a elementos da natureza, como árvores, pedras e gramíneas. Isso cria uma atmosfera mais imersiva, tornando o mundo do Minecraft mais convincente e agradável de explorar. Itens como ferramentas e armaduras foram redesenhados com sutileza, mantendo-se fiéis ao estilo original do jogo, mas com um toque de refinamento.</p>
<p>Para os jogadores do Xbox 360 que desejam manter a experiência autêntica do Minecraft, mas com um toque de beleza e naturalismo, a "Better Vanilla" é a escolha perfeita. Esta textura busca trazer um equilíbrio delicado entre o encanto clássico do jogo e a busca por uma estética mais realista. Com a "Better Vanilla", você pode mergulhar em aventuras no mundo do Minecraft com uma nova perspectiva visual, mantendo intacta a magia do jogo que conquistou os corações de tantos jogadores ao longo dos anos.</p>
`, "https://www.mediafire.com/file/47x8gjbkdoktd7a/Better+Vanilla+Economic+Update/file", "DeivHD", "img/capas/bettervanilla.webp", "img/capas/bettervanilla1.webp", "img/capas/bettervanilla2.webp", "img/capas/bettervanilla3.webp", "img/capas/bettervanilla4.webp", "img/capas/Image_not_available.png", "img/users/deivyson.png");

const txt2 = new TexturePacks("COD BOII Zombies", `
<p>A textura "Legacy Edition - Call of Duty Black Ops II Zombies" é uma homenagem impressionante ao popular modo de jogo "Zombies" da franquia Call of Duty: Black Ops II. Esta textura foi projetada especialmente para a Legacy Edition do Minecraft e traz uma experiência de jogo única para os fãs de ambos os mundos, combinando a estética sombria e emocionante do jogo de tiro em primeira pessoa com a criatividade e o mundo de blocos do Minecraft.</p>
<p>Ao aplicar a textura "Legacy Edition - Call of Duty Black Ops II Zombies", você se sentirá imediatamente transportado para o ambiente arrepiante e tenso dos mapas de zumbis icônicos do Black Ops II. Os blocos e texturas do Minecraft foram recriados com maestria para refletir os corredores decadentes, os detalhes sombrios e a atmosfera opressiva dos mapas de zumbis do jogo original.</p>
<p>As construções e estruturas no jogo ganham vida com detalhes impressionantes que recriam os cenários icônicos dos mapas de zumbis, tornando cada experiência de jogo uma aventura emocionante e assustadora. Os zumbis, naturalmente, também recebem uma transformação visual, parecendo ainda mais ameaçadores e sombrios, o que aumenta a intensidade e a emoção do jogo.</p>
<p>Essa textura não apenas evoca o espírito do Call of Duty: Black Ops II Zombies, mas também permite que os jogadores criem seus próprios mapas personalizados inspirados no modo de jogo. É uma escolha incrível para os fãs de ambas as franquias, oferecendo uma maneira única de explorar e sobreviver em um mundo cheio de desafios e perigos, inspirado nos horrores e na emoção do apocalipse zumbi do universo Call of Duty. A textura "Legacy Edition - Call of Duty Black Ops II Zombies" é uma experiência única de Minecraft que atrairá tanto os fãs da série de tiro quanto os amantes do mundo criativo do Minecraft.</p>
`, "https://www.mediafire.com/file/r7sbvtge1zz7y8n/Zombies_Black_Ops_2/file", "MW", "img/capas/codzombies1.png", "img/capas/codzombies2.png", "img/capas/codzombies3.png", "img/capas/codzombies4.png", "img/capas/codzombies5.png", "img/capas/Image_not_available.png", "img/users/MW.jpg");

const txt3 = new TexturePacks("1.14 Texturepack", `
<p>A versão 1.14 do Minecraft introduziu uma mudança significativa na textura do jogo em comparação com versões anteriores. Essa atualização trouxe um novo estilo visual para muitos elementos do jogo, notavelmente as texturas dos blocos e itens.</p>
<p>No geral, a textura da versão 1.14 do Minecraft trouxe uma melhoria na qualidade visual e um estilo mais detalhado, tornando o jogo mais imersivo e esteticamente agradável. Essa atualização foi bem recebida pela comunidade de jogadores, embora também tenha gerado discussões sobre as preferências pessoais em relação ao estilo de textura.</p>
`, "link1", "MW", "img/capas/1 (1).png", "img/capas/1 (2).png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/MW.jpg");

const txt4 = new TexturePacks("PUBG", `
<p>A textura de Minecraft no tema do jogo PUBG é uma ótima maneira de levar a ação e a aventura do jogo para o mundo de Minecraft. A textura inclui novos blocos, itens e mobs inspirados no PUBG.</p>
<p>Os blocos incluem itens como armas, veículos e construções do jogo. Os itens incluem roupas, armas e veículos. Os mobs incluem personagens do jogo, como soldados, civis e animais.</p>
<p>A textura de Minecraft no tema do jogo PUBG é uma ótima maneira de adicionar um toque de ação e aventura ao seu jogo favorito.</p>
`, "link1", "MW", "img/capas/pubgtexture (2).png", "img/capas/pubgtexture (1).png", "img/capas/pubgtexture (3).png", "img/capas/pubgtexture (4).png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/MW.jpg");

const txt5 = new TexturePacks("Faithfull", `
<p>A textura Faithful é uma textura de Minecraft que mantém o estilo original do jogo, mas com uma resolução maior. Isso significa que os blocos, itens e mobs são mais detalhados, o que pode dar ao jogo uma aparência mais realista.</p>
<p>A textura Faithful é uma ótima maneira de melhorar a aparência do Minecraft sem mudar muito o estilo do jogo. É uma boa opção para jogadores que querem um jogo mais bonito, mas que ainda querem manter a sensação clássica do Minecraft.</p>
<P>Aqui estão alguns detalhes específicos da textura:</P>
<ul>
    <li><b>Blocos:</b> Os blocos são mais detalhados, com texturas mais realistas. Por exemplo, o bloco de terra tem um efeito de textura mais natural e o bloco de pedra tem um aspecto mais rochoso.</li>
    <li><b>Itens:</b> Os itens são mais detalhados, com texturas mais realistas. Por exemplo, a espada de diamante tem um brilho mais intenso e o escudo tem uma textura mais texturizada.</li>
    <li><b>Mobs:</b> Os mobs são mais detalhados, com texturas mais realistas. Por exemplo, o Creeper tem uma aparência mais assustadora e o Lobo tem uma aparência mais realista.</li>
</ul>
`, "link1", "MW", "img/capas/faithfull (2).png", "img/capas/faithfull (1).png", "img/capas/faithfull (3).png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/MW.jpg");

const txt6 = new TexturePacks("Netherite", `
  <p>A textura que transforma as armaduras e ferramentas de diamante em ferramentas de netherite na edição legada do Minecraft é uma adição fascinante ao jogo, trazendo um toque de autenticidade e um visual mais sombrio para os equipamentos mais poderosos do jogo.</p>
  <p>A textura começa por aprimorar o visual da armadura e ferramentas de diamante, tornando-as mais envelhecidas e robustas. A aparência brilhante e reluzente do diamante é substituída por uma tonalidade escura e enferrujada, o que indica claramente que esses equipamentos passaram por uma transformação especial. Os detalhes em netherite, como as cadeias e os remendos, são nitidamente visíveis, destacando a natureza infernal desses materiais.</p>
`, "link1", "JanpiYT", "img/capas/netherite (1).png", "img/capas/netherite (2).png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/janpiYT.jpg");

const txt7 = new TexturePacks("1.17 Texturepack", `Desc`, "link1", "JanpiYT", "img/capas/ores.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/janpiYT.jpg");


// const txtx = new TexturePacks("Título", `Desc`, "link1", "Dono1", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png");


const txtcontainer = document.querySelector(".texturepacks");

function redirecionarParaInformacoes(objName) {
    localStorage.setItem("objecttoredirect", objName);
    window.location.replace("html/detalhes.html");
    obRedrect = objName;
}

const objetosPorPagina = 5; // Número de objetos por página
const txtobjetos = [txt0, txt1, txt2, txt3, txt4, txt5, txt6, txt7];

//==============================================================================================================================================



//============================OBJETOS DA CLASSE skinPACKS=============================================================================
class SkinPacks {
    constructor(titulo, desc, download, criador, img1, img2, img3, img4, img5, img6, userimg) {
        this.titulo = titulo;
        this.desc = desc;
        this.download = download;
        this.criador = criador;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;
        this.userimg = userimg;

    }
}

const skn1 = new SkinPacks("Spider Man", `
<p>Pacotes de skins de todos os personangens de todos os filmes do homem aranha.</p>
`, "link1", "MW", "img/capas/spiderman (1).png", "img/capas/spiderman (2).png", "img/capas/spiderman (3).png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/MW.jpg");

const skn2 = new SkinPacks("MW 4d SkinPack", `
<p>Skin Pack 4d Do MW.</p>
`, "link1", "MW", "img/capas/MW4dSkin.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/MW.jpg");

const skn3 = new SkinPacks("Among Us", `
<p>Skin Pack 4d Dos Personagens de Among Us.</p>
`, "link1", "BLN", "img/capas/amongus.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/BLN.jpg");

const skn4 = new SkinPacks("Brenan's Models V5", `
<p>Skin Packs 4d de skins Aleatórias.</p>
`, "link1", "BLN", "img/capas/brenansModels.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/BLN.jpg");

const skn5 = new SkinPacks("Giants", `
<p>Pacotes de skins de mobs do minecraft Gigantes.</p>
`, "link1", "BLN", "img/capas/bigskinpack.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/BLN.jpg");

const skn6 = new SkinPacks("Ultimate Blocks", `
<p>Pacotes de skins de todos os blocos do minecraft.</p>
`, "link1", "BLN", "img/capas/ultimateblocks.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/BLN.jpg");

const skn7 = new SkinPacks("H&S Mob Edition", `
<p>Pacotes de skins de todos os personangens de todos os mobs do minecraft.</p>
`, "link1", "MW", "img/capas/ultimatemobs.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/users/BLN.jpg");
// const sknx = new TexturePacks("Título", `Desc`, "link1", "Dono1", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png");


const skncontainer = document.querySelector(".skinpacks");



const sknobjetos = [skn1, skn2, skn3, skn4, skn5, skn6, skn7];
//==============================================================================================================================================


//============================OBJETOS DA CLASSE MAPS=============================================================================
class Maps {
    constructor(titulo, desc, download, criador, img1, img2, img3, img4, img5, img6, userimg) {
        this.titulo = titulo;
        this.desc = desc;
        this.download = download;
        this.criador = criador;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;
        this.userimg = userimg;
    }
}

const mps1 = new TexturePacks("Tranzit Map", `
<p>O mapa "Tranzit-Inspired" para o Minecraft é uma recriação impressionante do famoso mapa "Tranzit" do modo zumbi do Call of Duty: Black Ops II. Esta recriação meticulosa captura todos os elementos-chave que tornaram o mapa original tão icônico e desafiador, trazendo a intensidade e a emoção do apocalipse zumbi para o mundo dos blocos do Minecraft.</p>
        <p>Ao explorar o mapa "Tranzit-Inspired", os jogadores encontrarão um ambiente pós-apocalíptico vasto e sinistro, repleto de detalhes e referências ao mapa original. Os locais familiares, como a estação de ônibus, a fazenda, a cidade e a torre de rádio, foram recriados com grande atenção aos detalhes, permitindo que os jogadores revivam as experiências e desafios que tornaram o "Tranzit" tão emocionante.</p>
        <p>A jogabilidade deste mapa é verdadeiramente épica. Os jogadores enfrentarão hordas de zumbis em locais familiares, e a busca por suprimentos e armas será crucial para sobreviver. O icônico ônibus movido a lava está presente, oferecendo uma maneira emocionante de se deslocar pelo mapa e escapar das ameaças zumbis.</p>
        <p>Além disso, os criadores deste mapa incluíram missões e objetivos opcionais que os jogadores podem completar para desbloquear recompensas e aprimorar suas habilidades de sobrevivência. Isso adiciona uma camada adicional de profundidade à jogabilidade, tornando cada partida única e desafiadora.</p>
        <p>A recriação do "Tranzit-Inspired" para o Minecraft é uma homenagem excepcional ao legado de Call of Duty: Black Ops II Zombies. Ela permite que os fãs de ambas as franquias experimentem a emoção de enfrentar hordas de zumbis e lutar pela sobrevivência em um ambiente familiar, enquanto exploram e interagem com os elementos únicos do mundo do Minecraft. Este mapa é um must-play para os amantes de zumbis e fãs de jogos de sobrevivência.</p>
`, "https://www.mediafire.com/file/2esb77uaz7h8jtr/Tranzit_Remake.bin/file", "MW", "img/capas/codzombies1.png", "img/capas/codzombies2.png", "img/capas/codzombies3.png", "img/capas/codzombies4.png", "img/capas/codzombies5.png", "img/capas/Image_not_available.png", "img/users/MW.jpg");


// const mpx = new TexturePacks("Título", `Desc`, "link1", "Dono1", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png", "img/capas/Image_not_available.png");


const mpscontainer = document.querySelector(".maps");



const mpsobjetos = [mps1];
//==============================================================================================================================================

function criarPaginas(categoria, container) {
    let categoriapg = categoria;
    const numPaginas = Math.ceil(categoria.length / objetosPorPagina);
    
    for (let pagina = 1; pagina <= numPaginas; pagina++) {
        const paginaDiv = document.createElement("div");
        
        paginaDiv.classList.add("pagina");
        paginaDiv.classList.add("pg" + pagina);
        

        
        for (let i = (pagina - 1) * objetosPorPagina; i < pagina * objetosPorPagina && i < categoria.length; i++) {
            const objeto = categoria[i];
            const div = document.createElement("div");
            div.classList.add("car-dlc");
            div.onclick = function () {
                redirecionarParaInformacoes(objeto.titulo);
            }
            div.innerHTML = `
                <img src="${objeto.img1}" alt="" class="imgTheme">
                <h5 class="title">${objeto.titulo}</h5>
                <div class="criadorArea">
                    <img src="${objeto.userimg}" alt="" class="profile">
                    <p>${objeto.criador}</p>
                </div>
            `;
            paginaDiv.appendChild(div);
            
        }
        
        container.appendChild(paginaDiv);
    }
}




function comparar(texto) {
    const infos = document.getElementById("apresentacao");
    const infosDownload = document.querySelector(".download");
    const infosUsuario = document.querySelector(".criador");
    const infosUsuarioBio = document.querySelector(".sobre-o-criador");


    txtobjetos.forEach(objeto => {
        if (texto === objeto.titulo) {
            infos.innerHTML = `
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../${objeto.img1}" class="d-block w-100" alt="imagem 1">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img2}" class="d-block w-100" alt="imagem 2">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img3}" class="d-block w-100" alt="imagem 3">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img4}" class="d-block w-100" class="d-block w-100" alt="imagem 4">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img5}" class="d-block w-100" class="d-block w-100" alt="imagem 5">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <H3>${objeto.titulo}</H3>
    ${objeto.desc}

    ` ;

            infosDownload.innerHTML = `
      <p>Baixe sua DLC aqui!</p>
      <a href="${objeto.download}" target="_blank" download="">Download</a>
      `;
        
      usrobjetos.forEach(usuario =>{
        if(objeto.criador === usuario.username){
            infosUsuario.innerHTML = `
            <img src="../${usuario.userimg}" alt="imagem do criador" class="profile">
                <h4>${usuario.username}</h4>
                ${usuario.social1}
                ${usuario.social2}
                ${usuario.social3}
            `;

            infosUsuarioBio.innerHTML = `
                <p>${usuario.bio}</p>
            `;

            donateBox.innerHTML = `
            
            <img src="${usuario.donate}" alt="doação">
            
            `;
        }
      });
    
    }

    });


    sknobjetos.forEach(objeto => {
        if (texto === objeto.titulo) {
            infos.innerHTML = `
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../${objeto.img1}" class="d-block w-100" alt="imagem 1">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img2}" class="d-block w-100" alt="imagem 2">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img3}" class="d-block w-100" alt="imagem 3">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img4}" class="d-block w-100" class="d-block w-100" alt="imagem 4">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img5}" class="d-block w-100" class="d-block w-100" alt="imagem 5">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <H3>${objeto.titulo}</H3>
    ${objeto.desc}

        ` ;

            infosDownload.innerHTML = `
      <p>Baixe sua DLC aqui!</p>
      <a href="${objeto.download}" target="_blank" download="">Download</a>
      `;

      usrobjetos.forEach(usuario =>{
        if(objeto.criador === usuario.username){
            infosUsuario.innerHTML = `
            <img src="../${usuario.userimg}" alt="imagem do criador" class="profile">
                <h4>${usuario.username}</h4>
                ${usuario.social1}
                ${usuario.social2}
                ${usuario.social3}
            `;

            infosUsuarioBio.innerHTML = `
                <p>${usuario.bio}</p>
            `;

            donateBox.innerHTML = `
            
            <img src="${usuario.donate}" alt="doação">
            
            `;

        }
      });
        }
    });

    mpsobjetos.forEach(objeto => {
        if (texto === objeto.titulo) {
            infos.innerHTML = `
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../${objeto.img1}" class="d-block w-100" alt="imagem 1">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img2}" class="d-block w-100" alt="imagem 2">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img3}" class="d-block w-100" alt="imagem 3">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img4}" class="d-block w-100" class="d-block w-100" alt="imagem 4">
            </div>
            <div class="carousel-item">
                <img src="../${objeto.img5}" class="d-block w-100" class="d-block w-100" alt="imagem 5">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <H3>${objeto.titulo}</H3>
    ${objeto.desc}

        ` ;

            infosDownload.innerHTML = `
      <p>Baixe sua DLC aqui!</p>
      <a href="${objeto.download}" target="_blank" download="">Download</a>
      `;

      usrobjetos.forEach(usuario =>{
        if(objeto.criador === usuario.username){
            infosUsuario.innerHTML = `
            <img src="../${usuario.userimg}" alt="imagem do criador" class="profile">
                <h4>${usuario.username}</h4>
                ${usuario.social1}
                ${usuario.social2}
                ${usuario.social3}
            `;

            infosUsuarioBio.innerHTML = `
                <p>${usuario.bio}</p>
            `;
            donateBox.innerHTML = `
            
            <img src="${usuario.donate}" alt="doação">
            
            `;
        }
      });
        }
    });
}

if (document.title === "MineXb360 MarketPlace") {
    
    criarPaginas(txtobjetos , txtcontainer);
    criarPaginas(sknobjetos , skncontainer);
    criarPaginas(mpsobjetos , mpscontainer);
}

if (document.title === "Detalhes") {
    comparar(obRedrect);
}
