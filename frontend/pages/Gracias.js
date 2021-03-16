import React from "react";
import styled from "styled-components";
import { Cajas } from "../styles/globalStyles";




const Gracias = () => {
  return (
    <Cajas>
    
      <p style={{marginTop:'32px'}}>Enviado con éxito</p>
      <h2 style={{marginTop:'32px'}}>¡GRACIAS!</h2>
      <img src="creareto/logoluzongracias.png" alt=""style={{marginTop:'32px'}}/>
      <p>Has realizado otro Click Luzón ¡van 15!</p>
      <p style={{marginTop:'32px'}}>Estas en el nivel</p>
      <h2>INSPIRADOR</h2>
      <img src="creareto/enhorabuena.png" alt="" style={{marginTop:'25px'}}/>
    </Cajas>
    
  );
};

export default Gracias;