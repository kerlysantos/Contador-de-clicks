import React from "react";
import '../botones-css/boton.css';


function Boton ({texto, esBotonDeClic, manejarClinc }){
  return(
    <button 
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
      onClick= {manejarClinc} > 
      {texto}
    </button>


  );
}
export default Boton;