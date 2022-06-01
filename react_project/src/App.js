import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Create from "./components/Create";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";
import Note from "./components/Note";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/note/" element={<Note/>}/>
            <Route path="/note/:noteUrl" element={<Note/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </main>
      <Footer/>
      </BrowserRouter>

      {/*<About/>*/}
      {/*<Create/>*/}
      {/*<Main />*/}
      {/*<Footer/>*/}
      {/*<Header/>*/}
      {/*<Error/>*/}
      {/*<Note/>*/}
    </>
  );
}

export default App;
