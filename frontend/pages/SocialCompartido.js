import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Buttons, colors, Title2, Cajas } from "../styles/globalStyles";

const Imagen = styled.a`
  margin-right: 16px;
  margin-left: 16px;
  margin-top: 24px;
  margin-bottom: 32px;
`;

const Imagenes = styled.b`
  margin-right: 16px;
  
  margin-top: 24px;
  margin-bottom: 32px;
  height: 233px;
  width: 346px;
`;

const Parrafo = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  margin-left: 15px;
`;

const divi = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SocialCompartido = () => {
  return (
    <Cajas>

    
      <Imagen>
        {" "}
        <img src="Socialcompartido.png" alt="" style={{marginTop:'24px'}} />
      </Imagen>
      <img src="creareto/teanimas.png" alt="" style={{marginTop:'32px'}}/>

      <Link href="/Creatureto">
        <Buttons  outline2 style={{marginTop:'32px'}}>CREA TU RETO</Buttons>
        </Link>

      <img src="creareto/Ideasinspiradoras.png" alt="" style={{marginTop:'40px'}}/>
      
      <Imagenes>
        <img
          src="grupo-corriendo.jpg"
          alt="grupo-corriendo"
          height="233px"
          width="346px"
          style={{borderRadius:'15px 15px 0px 0px'}}
          style={{marginTop:'24px'}}
          
        />
      </Imagenes>
      <divi>
        <Parrafo>
          Marina corrió 10 kms a favor de la ELA y lo ha compartido en Instagram
        </Parrafo>
        <Buttons grayr>Deportivo</Buttons>
      </divi>

      <Parrafo>#10kmporelela</Parrafo>
      <Buttons grayr>Carrera 10km</Buttons>

      <Imagenes>
        <img src="baile.jpg" alt="baile" height="233px" width="346px" style={{borderRadius:'15px 15px 0px 0px'}} style={{marginTop:'32px'}}/>
      </Imagenes>
      <Parrafo>
        Laura y sus amigos hicieron una coreografia de baile y lo compartieron
        en Instagram
      </Parrafo>
      <Buttons grayr>Baile</Buttons>
      <Parrafo>#baileporelela</Parrafo>
      <Buttons grayr>coreografía</Buttons>


      <Imagenes>
        <img src="creareto/futbol.png" alt="futbol" height="233px" width="346px" style={{borderRadius:'15px 15px 0px 0px'}} style={{marginTop:'32px'}}/>
      </Imagenes>
      <Parrafo>
        Jorge y sus amigos se retan a 20 goles en un partido a favor de la Ela y lo comparten en Facebook
      </Parrafo>
      <Buttons grayr>Deportivo</Buttons>
      <Parrafo>#fútbolporelela</Parrafo>
      <Buttons grayr>20 goles</Buttons>
    
    </Cajas>
  );
};

export default SocialCompartido;
