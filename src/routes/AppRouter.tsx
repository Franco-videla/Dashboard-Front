import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../screens/Inicio/Inicio";
import Manufacturados from "../screens/manufacturados/Manufacturados";
import Empresa from "../screens/empresas/Empresas";
import Insumo from "../screens/insumos/Insumos";
import Categoria from "../screens/categorias/Categorias";
import Empleado from "../screens/empleados/Empleados";
import Clientes from "../screens/clientes/Clientes";
import Promocion from "../screens/promociones/Promociones";
import Sucursales from "../screens/sucursales/Sucursales";
import Navbar from "../componentes/common/NavBar";
import Sidebar from "../componentes/common/Sidebar";

//<div style={{ width: "2537px" }}>
const AppRouter: React.FC = () => {
  return (

    <Router>
      <div style={{ width: "100%" }}>
        <Navbar />
      </div>
      <div className="d-flex" style={{ width: "100%" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/empresas" element={<Empresa />} />
            <Route path="/manufacturados" element={<Manufacturados />} />
            <Route path="/insumos" element={<Insumo />} />
            <Route path="/categorias" element={<Categoria />} />
            <Route path="/empleados" element={<Empleado />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/promociones" element={<Promocion />} />
            <Route path="/sucursales" element={<Sucursales />} />
          </Routes>
        </div>
      </div>
    </Router>

  );
};

export default AppRouter;
