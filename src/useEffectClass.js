import { Component, useEffect, useState } from "react";

const useContador = (initial) => {
  const [contador, setContador] = useState(initial);
  const incrementar = () => setContador(contador + 1);
  return [contador, incrementar];
};

/// USE EFFECT - Con Class
class Interval extends Component {
  intervalo = "";

  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    return <p>Intervalo</p>;
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = contador;
  }, [contador]);

  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  );
};

export default App;

export const USE_EFFECT_CLASS = `import { Component, useEffect, useState } from "react";

const useContador = (initial) => {
  const [contador, setContador] = useState(initial);
  const incrementar = () => setContador(contador + 1);
  return [contador, incrementar];
};

/// USE EFFECT - Con Class
class Interval extends Component {
  intervalo = "";

  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    return <p>Intervalo</p>;
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = contador;
  }, [contador]);

  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  );
};

export default App;
`;
