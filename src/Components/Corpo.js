import Post from './Post';
import Story from './Story';
import Sugestao from './Sugestao';
import Usuario from './Usuario';

//Criando objetos para componentizar
let objetosStorie = [
  {
    enredeco: "assets/9gag.svg",
    pagina: "9gag",
  },
  {
    enredeco: "assets/meowed.svg",
    pagina: "meowed",
  },
  {
    enredeco: "assets/barked.svg",
    pagina: "barked"
  },
  {
    enredeco: "assets/nathanwpylestrangeplanet.svg",
    pagina: "nathanwpylestrangeplanet",
  },
  {
    enredeco: "assets/wawawicomics.svg",
    pagina: "wawawicomics",
  },
  {
    enredeco: "assets/respondeai.svg",
    pagina: "respondeai",
  },
  {
    enredeco: "assets/filomoderna.svg",
    pagina: "filomoderna",
  },
  {
    enredeco: "assets/memeriagourmet.svg",
    pagina: "memeriagourmet",
  }
];
let objetosPost = [
  {
    enderecoPost: "assets/gato-telefone.svg",
    enderecoPerfil: "assets/meowed.svg",
    nomePerfil: "meowed"
  },
  {
    enderecoPost: "assets/dog.svg",
    enderecoPerfil: "assets/barked.svg",
    nomePerfil: "barked"
  },
];

let objetosSugestao = [
  {
    imagemPagina: "assets/bad.vibes.memes.svg",
    nomePagina: "bad.vibes.memes",
    statusPagina: "Segue você"
  },
  {
    imagemPagina: "assets/chibirdart.svg",
    nomePagina: "chibirdart",
    statusPagina: "Segue você"
  },
  {
    imagemPagina: "assets/razoesparaacreditar.svg",
    nomePagina: "razoesparaacreditar",
    statusPagina: "Novo no Instagram"
  },
  {
    imagemPagina:"assets/adorable_animals.svg",
    nomePagina: "adorable_animals",
    statusPagina: "Segue você"
  },
  {
    imagemPagina: "assets/smallcutecats.svg",
    nomePagina: "smallcutecats",
    statusPagina: "Segue você"
  }
];
//Terminando de criar objetos para componentizar


export default function Corpo(){
    return (
        <div class="corpo">
        <div class="esquerda">
          <div class="stories">
            {
              objetosStorie.map((objeto) => <Story enredeco = {objeto.enredeco} pagina = {objeto.pagina}/>)
            }
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">
            {
              objetosPost.map((objeto2) => <Post enderecoPost = {objeto2.enderecoPost} enderecoPerfil = {objeto2.enderecoPerfil} nomePerfil = {objeto2.nomePerfil}/>)
            }
            
          </div>
        </div>

        <div class="sidebar">
          <Usuario nome = "catanacomics" aparente = "Catana"/>
            
          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {
              objetosSugestao.map((objeto3) => <Sugestao imagemPagina = {objeto3.imagemPagina} nomePagina = {objeto3.nomePagina} statusPagina = {objeto3.statusPagina}/>)
            }
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    );
}