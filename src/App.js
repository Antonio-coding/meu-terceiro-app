import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from './Partials/HeaderPartial/HeaderPartial';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="minhas-pastas" element={<hi> Minhas Pastas</hi>} />
        </Routes>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
