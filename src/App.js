import { CopyBlock, dracula } from "react-code-blocks";
import Intro, { INTRO } from "./intro";
import FunctionalComponent, {
  FUNCTIONAL_COMPONENT,
} from "./functionalComponent";
import UseState, { USE_STATE } from "./useState";
import UseEffect, { USE_EFFECT } from "./useEffect";
import UseEffectDesubscribe, {
  USE_EFFECT_DESUBSCRIBE,
} from "./useEffectDesusbcribe";
import UseEffectClass, { USE_EFFECT_CLASS } from "./useEffectClass";
import UseReducer, { USE_REDUCER } from "./useReducer";
import UseRef, { USE_REF } from "./useRef";

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#333",
    alignSelf: "flex-start",
    padding: "30px",
    boxShadow: "0 2px 7px rgb(51 51 51 / 20%)",
    margin: 0,
    width: "-webkit-fill-available",
  },
  topicContainer: {
    paddingBottom: "35px",
    borderBottom: "1px solid rgba(51, 51, 51, 0.2)",
    minWidth: "1200px",
  },
  subtitle: {
    color: "#6f42c5",
    alignSelf: "flex-start",
  },
  subtitleContainer: {
    position: "relative",
  },
  retryButton: {
    border: "none",
    background: "#259325",
    color: "#fafafa",
    borderRadius: "15px",
    padding: "5px 7px",
    position: "absolute",
    top: "4px",
    right: "10px",
  },
};

const App = () => {
  return (
    <div style={styles.layout}>
      <h1 style={styles.title}>Componentes funcionales: hooks</h1>
      {/* intro */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>1. Introducción</h2>
        <CopyBlock
          text={INTRO}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button
            style={styles.retryButton}
            // onClick={() => setIsIntroVisible(!isIntroVisible)}
          >
            RUN AGAIN
          </button>
        </div>
        <Intro />
      </div>
      {/* functional components */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>2. Functional components</h2>
        <CopyBlock
          text={FUNCTIONAL_COMPONENT}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button
            style={styles.retryButton}
            // onClick={() => setIsIntroVisible(!isIntroVisible)}
          >
            RUN AGAIN
          </button>
        </div>
        <FunctionalComponent />
      </div>
      {/* useState */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>3. Hook: useState</h2>
        <CopyBlock
          text={USE_STATE}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button
            style={styles.retryButton}
            // onClick={() => setIsIntroVisible(!isIntroVisible)}
          >
            RUN AGAIN
          </button>
        </div>
        <UseState />
      </div>
      {/* useEffect */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>4. Hook: useEffect</h2>
        <CopyBlock
          text={USE_EFFECT}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button style={styles.retryButton}>RUN AGAIN</button>
        </div>
        <UseEffect />
      </div>
      {/* useEffect desubscribe */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>5. Hook: useEffect (desubscribe)</h2>
        <CopyBlock
          text={USE_EFFECT_DESUBSCRIBE}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button style={styles.retryButton}>RUN AGAIN</button>
        </div>
        <UseEffectDesubscribe />
      </div>
      {/* useEffect Class */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>6. Hook: useEffect with Class component</h2>
        <CopyBlock
          text={USE_EFFECT_CLASS}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button style={styles.retryButton}>RUN AGAIN</button>
        </div>
        <UseEffectClass />
      </div>
      {/* useReducer */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>7. Hook: useReducer</h2>
        <CopyBlock
          text={USE_REDUCER}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button style={styles.retryButton}>RUN AGAIN</button>
        </div>
        <UseReducer />
      </div>
      {/* useRef */}
      <div style={styles.topicContainer}>
        <h2 style={styles.subtitle}>8. Hook: useRef</h2>
        <CopyBlock
          text={USE_REF}
          language={"javascript"}
          theme={dracula}
          showLineNumbers
        />
        <div style={styles.subtitleContainer}>
          <h2 style={styles.subtitle}>Resultado</h2>
          <button style={styles.retryButton}>RUN AGAIN</button>
        </div>
        <UseRef />
      </div>
    </div>
  );
};

export default App;
