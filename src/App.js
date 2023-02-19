import './App.css';
import { Box } from '@mui/material'
import Administracion from './components/administracion/administracion.js'
import Informacion from './components/informacion-general/informacion-general.js'
import Portafolio from './components/portafolio/portafolio.js'
import Restringido from './components/acceso-restringido/acceso-restringido';
import Usuarios from './components/usuarios/usuarios.js'
import { ProtectedRoute } from './components/protected-route/protected-route';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const App=()=> {

  return (
    <Box>
      <BrowserRouter>
          <Routes> 
              <Route path='/administracion' element={<Administracion/>}> </Route> 
              <Route path='/informacion-general' element={<Informacion/>}> </Route>
              <Route path='/usuarios' element={<Usuarios/>}> </Route>
              <Route path='/acceso-restringido' element={<Restringido/>}> </Route>

              <Route element={<ProtectedRoute isAllowed={true}/>}> 
                <Route path='/portafolio' element={<Portafolio/>}> </Route>
              </Route>  
          </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
