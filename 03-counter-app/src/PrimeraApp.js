import React from 'react';
import PropTypes from 'prop-types';
// Es casi necesario que ses PropTypes

// Functional Component

const PrimeraApp = ({saludo, subtitulo }) => {

  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );

};

// Y aquí debe de ser .propTypes y en la propiedad PropTypes
PrimeraApp.propTypes = {
  //saludo: PropTypes.string   Has aquí requiere que la propiedad sea string pero no obligatoria
  saludo: PropTypes.string.isRequired   // Ahora si es obligatirio
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;