
function Personas (props){
    console.log(props)
    
    return(
      <div className='fancy' 
      style={{backgroundColor: props.color}}>
        <h3>Nombre:{props.nombre}</h3>
        <p>Edad:{props.edad}</p>
        <p>Correo:{props.correo}</p>
      </div>
    )
  }

  export default Personas