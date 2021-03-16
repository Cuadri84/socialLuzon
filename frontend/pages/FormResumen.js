import React from "react";
import styled from "styled-components";
import {Buttons, Cajas} from "../styles/globalStyles"

const FormResumen = () => {
  return (
    <Cajas>
           
      <img src="creareto/resumencreado.png" alt="" style={{marginTop:'24px'}}/>

      <img src="creareto/1.png" alt="" style={{marginTop:'32px'}}/>
      <p></p>
      <img src="creareto/2.png" alt="" />
      <p></p>
      <img src="creareto/3.png" alt="" />
      <p></p>
      <img src="creareto/4.png" alt="" />
      <p></p>

      <Buttons contained2 style={{marginTop:'40px'}}>Crear reto</Buttons>
      </Cajas>
  );
};

export default FormResumen;
