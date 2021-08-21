import ReactDOM from "react-dom";

import Navbar from "./Components/Navbar";
import Corpo from "./Components/Corpo";
import Fundo from "./Components/Fundo";


function App(){
    return (
        <div>
            <Navbar />
            <Corpo />
            <Fundo />
        </div>
    );
}

ReactDOM.render(<App/>,document.querySelector(".root"));