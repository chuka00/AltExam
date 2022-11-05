import React from "react";
import "./App.css";
import CounterOne from "./components/CounterOne";
import ErrorBoundary from "./components/ErrorBoundary";

const App = ()=>{
  return(
    <section className="main-container">
      <ErrorBoundary>
        <CounterOne />
      </ErrorBoundary>
    </section>
  )
}
export default App;
