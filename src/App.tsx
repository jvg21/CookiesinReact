import Aceitar from "./components/aceitar";
import Form from "./components/form";
import {BrowserRouter ,Routes,Route, Link} from 'react-router-dom'

function App() {

    
    return(
      <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/teste">Teste</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/form" element={<Form/>}/>
        <Route path="/teste" element={<Aceitar/>}/>
      </Routes>
      </BrowserRouter>
    
    )
}

export default App;
