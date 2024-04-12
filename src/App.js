import './App.css';
import BotonA from './Componentes/BotonAmarillo.js';
import Cargandos from './Componentes/Cargando.js';
import MenuC from './Componentes/Menu.js';
import Switches from './Componentes/Switches.js';
import Personas from './Componentes/Personas.js';
import ContadorC from './Componentes/Contador';


function App() {

  const nombre= <h1>PEPE PISTOLAS</h1>;
  const correo= <h4>PPP@deadmail.com</h4>;
  const telefono= <p>3213656546</p>;
  const edad = <p>33</p>;
  const empleado= <div>{nombre}{correo}{telefono}{edad}</div>


  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Pepe',
    lastName: 'Perez'
  };
  
  const Saludos = (
    <div className='fancy'>
      Hello, {formatName(user)}!
    </div>
  );



  return (
    <div className="App">
      
      <MenuC/>

      {Saludos}

      <header className="App-header">




        <BotonA/>
        {empleado}
        <Personas nombre = 'Ricky Ricon' edad='33' correo='RR@WTF.com' color='Blue'/>
        <Cargandos/>
        <Personas nombre = 'Paco Ricon' edad='11' correo='RR@WTF.com' color='Red'/>
        <Cargandos/>
        <Personas nombre = 'Pedro Ricon' edad='22' correo='RR@WTF.com' color='Pink'/>
        <Cargandos/>
        <Personas nombre = 'Popeye Ricon' edad='44' correo='RR@WTF.com' color='Black'/>
        <Cargandos/>
        <Switches/>

      </header>
      <ContadorC/>
    </div>
  );
}





export default App;
