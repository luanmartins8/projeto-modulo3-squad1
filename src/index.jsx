import 'semantic-ui-css/semantic.min.css';
import "./view/css/Filmes.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./view/Layout";
import Home from "./view/Home";
import Filmes from "./view/Filmes";
import Contato from "./view/Contato";
import Sobre from "./view/Sobre";
import NoPage from "./view/NoPage";
import Footer from "./view/Footer";
import FAQ from "./view/FAQ";
import AdmPage from "./view/AdmPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Filmes" element={<Filmes />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="Contato" element={<Contato />} />
          <Route path="*" element={<NoPage />} />
          <Route path="FAQ" element={<FAQ />}/>
          <Route path="AdmPage" element={<AdmPage />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<App />
<Footer />
  </>
);
