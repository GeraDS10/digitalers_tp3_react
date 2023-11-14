import React, { useState } from 'react';
import './style.css';

function Dolar() {
    const [dolarBlue, setDolarBlue] = useState({ compra: null, venta: null });

    {/*  Se realiza una consulta a la API de dolar para obtener el valor 
        del dolar blue venta y dolar blue compra*/}
    fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => {
        setDolarBlue({ compra: data.compra, venta: data.venta });
    });
  
    return (
      <div className="dolar-blue">
        <p>Dólar Blue (Compra): {dolarBlue.compra ? `$${dolarBlue.compra}` : 'Cargando...'}</p>
        <p>Dólar Blue (Venta): {dolarBlue.venta ? `$${dolarBlue.venta}` : 'Cargando...'}</p>
      </div>
    );
}

export default Dolar;