import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import './App.css';

import Formulario from './components/Formulario/Formulario';

import Header from './components/Header/Header'
import Resumen from './components/Resumen/Resumen';
import Resultado from './components/Resultado/Resultado';
import Spinner from './components/Spinner/Spinner';

const Contenedor = styled.div`
  max-width: 90%;
  min-width: 60%;
  margin: 30px auto;
`;

const ContenedorForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',
    }
  });
  const [cargando, setCargando] = useState(false);

  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />
      <ContenedorForm>
        <Formulario
          setResumen={setResumen}
          setCargando={setCargando}
        />
        {cargando ? <Spinner /> : null}
        {!cargando ? 
          <Fragment>
            <Resumen datos={datos}/>
            <Resultado cotizacion={cotizacion}/>
          </Fragment>
         : null}
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
