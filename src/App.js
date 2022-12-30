import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { MinhasPaginasPage } from "./pages/MinhasPastas/MinhasPaginasPage";
import { HeaderPartial } from './Partials/HeaderPartial/HeaderPartial';
import { saveFolder} from './services/pinService'

function App() {
  saveFolder("JavaScript");
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="minhas-pastas" element={<MinhasPaginasPage/>} />
        </Routes>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
