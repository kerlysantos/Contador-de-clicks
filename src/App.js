
import './App.css';
import Boton from './componentes/boton';
import descarga from './imagenes/descarga.png';
import Contador from './componentes/contador';
import { useState } from 'react';


function App() {
  const [ numClics, setNumClis ] = useState (0);

  const manejarClinc = () => {
   setNumClis (numClics + 1);
  }

  const reiciciarContador = () => {
    setNumClis(0);
  }

  return (
    <div className="App">
      <h1 className='hola'> Contador de clicks</h1>

      <div className='frecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={descarga}
        alt= 'logo de frecodecamp' />
      </div>

      <div className='contenedor-principal-contador'>
        <Contador 
        numClics= {numClics}/>
        <Boton  
        texto="Clic"
        esBotonDeClic={true}
        manejarClinc={manejarClinc}/>

        <Boton  
        
        texto= "Reiniciar"
        esBotonDeClic={false}
        manejarClinc={ reiciciarContador }/>
        
      </div>
    </div>
  );
}

export default App;
