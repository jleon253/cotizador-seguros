// Calcular la diferencia en años
export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

// Calcular el total a pagar según la marca
export const calcularMarca = (marca) => {
  let incremento;
  switch (marca) {
    case 'asiatico':
      incremento = 1.05;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'europeo':
      incremento = 1.30;
      break;
    default:
      break;
  }
  return incremento;
};

// Calculo por tipo de seguro
export const calcularPlan = (plan) => {
  return (plan === 'basico') ? 1.20 : 1.50;
};