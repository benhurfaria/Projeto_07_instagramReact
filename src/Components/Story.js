export default function Story(props){
    return (
        <div class="story">
              <div class="imagem">
                <img src={props.enredeco}/>
              </div>
              <div class="usuario">
                {props.pagina}
              </div> 
        </div>
    );
}
        