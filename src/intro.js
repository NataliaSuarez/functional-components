import React from "react";

/// funcion IMPURA: no retorna siempre el mismo resultado
// otros ej: llamado a una api, el response podria ser diferente por cambios en la db
const funcionImpura = () => new Date().toLocaleString();

/// en react las funciones son PURA: nunca cambia el valor de retorno
const MiComponent = ({ miProp }) => (
  <div>
    Nombre: {miProp} - {funcionImpura()}
  </div>
);

const App = () => {
  return <MiComponent miProp={"un nombre magico"} />;
};

export default App;

export const INTRO = `import React from "react";
/// funcion IMPURA: no retorna siempre el mismo resultado
// otros ej: llamado a una api, el response podria ser diferente por cambios en la db
const funcionImpura = () => new Date().toLocaleString();

/// en react las funciones son PURA: nunca cambia el valor de retorno
const MiComponent = ({ miProp }) => (
  <div>
    Nombre: {miProp} - {funcionImpura()}
  </div>
);

const App = () => {
  return <MiComponent miProp={"un nombre magico"} />;
};

export default App;
`;
