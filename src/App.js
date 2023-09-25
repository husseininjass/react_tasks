
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Main from './pages/main';
import Form  from './forms/inputs';
function App() {
  return(
    <>
    <Form></Form>
       <BrowserRouter>
    <Routes>

    </Routes>
      <Routes>
      <Route index element={<Main/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App;
