import React from 'react';
import styled from '@emotion/styled';
import 'animate.css';
import PropTypes from 'prop-types'

const ContenerdorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #6be3f2;
  border: 1px solid #00838f;
  color: #00838f;
  margin-top: 1rem;
`;

const Resumen = ({datos}) => {
  const {marca, year, plan} = datos;
  if(marca === '' || year === '' || plan === '') return null;
  return (
    <ContenerdorResumen className="animate__animated animate__fadeInUp">
      <h3>Resumen de cotización</h3>
      <ul>
        <li>Marca:  {marca}</li>
        <li>Año:  {year}</li>
        <li>Plan:  {plan}</li>
      </ul>
    </ContenerdorResumen>
  );
};

Resumen.propTypes = {
  datos : PropTypes.object.isRequired
}

export default Resumen;