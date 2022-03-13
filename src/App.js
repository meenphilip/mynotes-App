import { Fragment } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <h1>Helo World From react notes App</h1>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
