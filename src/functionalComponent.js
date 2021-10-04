import { useState } from "react";

//// REGLAS DE LOS HOOKS
// 1. No se pueden llamar en loops, ni condiciones (it means if, while, for, etc) => Siempre en el nivel mas alto del Component
// 2. Solo se llaman en 2 partes:
// - en react Components
// - en custom hooks
// 3. cuando creamos un hook usamos use__

/// CLASS COMPONENT
// import { Component } from "react";
// class App extends Component {
//   state = {
//     contador: 0,
//   };
//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 });
//   };
//   render() {
//     return (
//       <div>
//         Contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     );
//   }
// }

/// FUNCTIONAL COMPONENT
const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default App;

export const FUNCTIONAL_COMPONENT = `import { useState } from "react";

//// REGLAS DE LOS HOOKS
// 1. No se pueden llamar en loops, ni condiciones
// (it means if, while, for, etc) => Siempre en el nivel mas alto del Component
// 2. Solo se llaman en 2 partes:
// - en react Components
// - en custom hooks
// 3. cuando creamos un hook usamos use__

/// CLASS COMPONENT
// import { Component } from "react";
// class App extends Component {
//   state = {
//     contador: 0,
//   };
//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 });
//   };
//   render() {
//     return (
//       <div>
//         Contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     );
//   }
// }

/// FUNCTIONAL COMPONENT
const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default App;
`;
