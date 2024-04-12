import { useState } from 'react';

const ContadorC = () => {

    const [numero, setNumero] = useState(0)
    

    const sumar = () => {
        setNumero(numero+1);
    }
    const restar = () => {
        setNumero(numero-1);
    }

return(
    <div>
        <button onClick={restar}>RESTAR</button>
        <h2>{numero}</h2>
        <button onClick={sumar}>SUMAR</button>

    </div>
)
}

export default ContadorC