import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<NotesPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
