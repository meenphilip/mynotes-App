import { Fragment } from "react";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import "./App.css";

function App() {
  return (
    <Fragment>
      <h1>Helo World From react notes App</h1>
      <Header />
      <NotesPage/>
    </Fragment>
  );
}

export default App;
