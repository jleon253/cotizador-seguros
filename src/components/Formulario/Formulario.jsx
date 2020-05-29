import React, {useState} from 'react'
import styled from '@emotion/styled'
import {
	obtenerDiferenciaYear,
	calcularMarca,
	calcularPlan,
} from '../../Helper'
import PropTypes from 'prop-types'

const Campo = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
`

const Label = styled.label`
	flex: 0 0 100px;
`

const Select = styled.select`
	display: block;
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
	-webkit-appearance: none;
`

const InputRadio = styled.input`
	margin: 0 1rem;
`

const Boton = styled.button`
	display: block;
  margin: auto;
  background-color: #00838f;
	font-size: 16px;
	width: 150px;
	padding: 1rem;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	transition: background-color 0.5s ease-out;
	&:hover {
		cursor: pointer;
		background-color: #26c6da;
	}
`

const Mierror = styled.div`
	padding: 10px;
	color: white;
	background-color: red;
	text-align: center;
	margin-bottom: 10px;
`
const Formulario = ({ setResumen, setCargando }) => {
	const [datos, setDatos] = useState({
		marca: '',
		year: '',
		plan: '',
	})
	const [error, setError] = useState(false)

	const { marca, year, plan } = datos

	const obtenerInformacion = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		})
	}

	const cotizarSeguro = (e) => {
		e.preventDefault()
		if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
			setError(true)
			return
		}
		setError(false)
		// Una base de 2000
		let resultadoBase = 2000
		// Obtener la diferencia en años
		const diferenciaYear = obtenerDiferenciaYear(year)
		// Por cada año hay que restar el 3%
		resultadoBase -= (diferenciaYear * 3 * resultadoBase) / 100
		// Asiatico: 5% , Americano: 15% , Europeo: 30%
		resultadoBase = calcularMarca(marca) * resultadoBase
		// Basico aumenta 20%, Completo aumenta 50%
		resultadoBase = parseFloat(calcularPlan(plan) * resultadoBase).toFixed(2)
		// Cargando
		setCargando(true)

		setTimeout(() => {
			setCargando(false)
			// Total
			setResumen({
				cotizacion: Number(resultadoBase),
				datos,
			})
		}, 2000)
	}

	return (
		<form onSubmit={cotizarSeguro}>
			{error ? <Mierror>Los campos son obligatorios</Mierror> : null}
			<Campo>
				<Label>Marca:</Label>
				<Select name='marca' value={marca} onChange={obtenerInformacion}>
					<option value=''>-- Seleccione --</option>
					<option value='asiatico'>Asiatico</option>
					<option value='americano'>Americano</option>
					<option value='europeo'>Europeo</option>
				</Select>
			</Campo>
			<Campo>
				<Label>Año:</Label>
				<Select name='year' value={year} onChange={obtenerInformacion}>
					<option value=''>-- Seleccione --</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
					<option value='2017'>2017</option>
					<option value='2016'>2016</option>
					<option value='2015'>2015</option>
					<option value='2014'>2014</option>
					<option value='2013'>2013</option>
					<option value='2012'>2012</option>
				</Select>
			</Campo>
			<Campo>
        <Label>Plan</Label>
        <div className="inputGroup">
          <InputRadio
            type='radio'
            name='plan'
            value='basico'
            checked={plan === 'basico'}
            onChange={obtenerInformacion}
          />{' '}
          Básico
          <br />
          <br />
          <InputRadio
            type='radio'
            name='plan'
            value='completo'
            checked={plan === 'completo'}
            onChange={obtenerInformacion}
          />{' '}
          Completo
        </div>
			</Campo>
			<Boton type='submit'>Cotizar</Boton>
		</form>
	)
}

Formulario.propTypes = {
  setResumen : PropTypes.func.isRequired,
  setCargando : PropTypes.func.isRequired
}

export default Formulario
