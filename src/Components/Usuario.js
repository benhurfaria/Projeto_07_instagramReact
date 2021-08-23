export default function Usuario(props){
    return (
        <div class="usuario">
            <img src="assets/catanacomics.svg" />
            <div class="texto">
              <strong>{props.nome}</strong>
              {props.aparente}
            </div>
        </div>
    );
}