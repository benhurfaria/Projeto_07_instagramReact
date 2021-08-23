export default function Sugestao(props){
    return(
        <div class="sugestao">
              <div class="usuario">
                <img src={props.imagemPagina} />
                <div class="texto">
                  <div class="nome">{props.nomePagina}</div>
                  <div class="razao">{props.statusPagina}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
    );
}