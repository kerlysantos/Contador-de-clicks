import React from "react";
import "../botones-css/contador.css"

function  Contador ({ numClics }){
  return(
    <div className="contador">
      {numClics}
    </div>
  );
}
export default Contador;