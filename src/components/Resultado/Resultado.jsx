import React from 'react';
import styled from '@emotion/styled';
import 'animate.css';
import PropTypes from 'prop-types'

const Mensaje = styled.h4`
  text-align: center;
  background-color: #f2f2f2;
  padding: 2rem;
  color: #a2a2a2;
`;

const Total = styled.h4`
  text-align: center;
  background-color: #00838f;
  padding: 2rem;
  color: #fff;
  text-transform: uppercase;
`;

const Resultado = ({cotizacion}) => {
  return (
    (cotizacion === 0)
      ? <Mensaje className="animate__animated animate__fadeInUp">Elige una marca, año y plan para comenzar.</Mensaje>
      : <Total className="animate__animated animate__fadeInUp">El total es: {cotizacion}</Total>
  );
};

Resultado.propTypes = {
  cotizacion : PropTypes.number.isRequired
}

export default Resultado;