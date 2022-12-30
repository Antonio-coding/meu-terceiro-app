import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { MinhasPaginasPage } from "./pages/MinhasPastas/MinhasPaginasPage";
import { HeaderPartial } from './Partials/HeaderPartial/HeaderPartial';
import { AppContext } from './store/AppContext';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <AppContext>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="minhas-pastas" element={<MinhasPaginasPage />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>


  );
}

export default App;
