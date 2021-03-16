import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {Buttons, Cajas, colors} from '../styles/globalStyles'




const Form1Tipo = () => {
  return (

    <Cajas>
    
      <img src="creareto/creatureto.png" alt="" style={{marginTop:'24px'}}/>
      <img src="creareto/pasos.png" alt="" style={{marginTop:'32px'}}/>
      <img src="creareto/1.png" alt="" style={{marginTop:'10px'}}/>
      <img src="creareto/2.png" alt="" />
      <img src="creareto/3.png" alt=""/>
      <img src="creareto/4.png" alt=""/>
      <img src="creareto/elige.png" alt="" style={{marginTop:'32px'}}/>
      
      <Link href="/Fcr234deportivo">
      <img src="creareto/deportivo.png" alt="" style={{marginTop:'10px'}}/>
      </Link>
      
      <Link href="/fcr234baile">
      <img src="creareto/baileboton.png" alt=""/>
      </Link>

      <Link href="/fcr234imitacion">
      <img src="creareto/imitacionboton.png" alt=""/>
      </Link>

      <Link href="/fcr234difusion">
      <img src="creareto/difusionboton.png" alt=""/>
      </Link>

      <Link href="/fcr234personalizado">
      <Buttons medium style={{border:'none'}}>Personalizado</Buttons>
      </Link>

      </Cajas>
  );
};

export default Form1Tipo;