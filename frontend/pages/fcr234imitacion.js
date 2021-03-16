import React from "react";
import styled from "styled-components";
import { Buttons,Cajas,Inputs } from "../styles/globalStyles";

const Fcr234imitacion = () => {
  return (
    <Cajas>
      <img src="creareto/creatureto.png" alt="" style={{marginTop:'24px'}}/>
      <img src="creareto/pasos.png" alt=""style={{marginTop:'32px'}} />
      
      <img src="creareto/2.png" alt="" style={{marginTop:'10px'}}/>
      <img src="creareto/3.png" alt="" />
      <img src="creareto/4.png" alt="" />


      <img src="creareto/eleccion.png" alt="" style={{marginTop:'32px'}}/>
      <p style={{color:'#F5857A' , marginTop:'16px' }}>Imitación</p>

      <Buttons gray1 style={{marginTop:'24px'}}>Imita a un famoso</Buttons>
      <Buttons gray1>Imita a un familiar</Buttons>
      <Buttons gray1>Juega a adivinar imitando</Buttons>
      <Buttons gray1>Habla como él</Buttons>
      <Buttons gray1>Juega a los mimos</Buttons>
      <Inputs gray1 type='text'></Inputs>


      <img src="creareto/Creahashtag.png" alt="" style={{marginTop:'40px'}}/>
      <Inputs hashtag placeholder='#escribe aquí tu hashtag' style={{marginTop:'20px'}}></Inputs>
      <img src="creareto/hashtags.png" alt=""style={{marginTop:'16px'}}/>
      <p style={{marginTop:'14px'}}>#10kmsporLuzon</p>
      <p style={{marginTop:'8px'}}>#coreografiaporelela</p>
      <p style={{marginTop:'8px'}}>#likesporluzon</p>


      <img src="creareto/Invitaparticipantes.png" alt="" style={{marginTop:'40px'}}/>
      <Inputs hashtag placeholder='Email participante' style={{marginTop:'10px'}}></Inputs>
      
      <Buttons contained2 style={{marginTop:'40px'}}>Listo</Buttons>
      </Cajas>
  );
};

export default Fcr234imitacion;
