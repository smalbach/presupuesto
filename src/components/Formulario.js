import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    guardarError(false);

    //Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    guardarGasto(gasto);
    guardarCrearGasto(true);
    guardarNombre("");
    guardarCantidad("");
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos</h2>
      {error ? (
        <Error mensage="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}

      <div className="campo">
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 3000"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Formulario.propType = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
