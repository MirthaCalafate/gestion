import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DataProvider } from './components/DataContext';
import Menu from './components/Menu';
import PaginaInicio from './components/paginas/PaginaInicio';
import PaginaTurnos from './components/paginas/PaginaTurnos';
import PaginaAgenda from './components/paginas/PaginaAgenda';
import PaginaLinks from './components/paginas/PaginaLinks';
import PaginaOS from './components/paginas/PaginaOS';
import PaginaProcesos from './components/paginas/PaginaProcesos';



function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
            <Menu />
            <Routes>
              <Route path = '/' element = {<PaginaInicio />} />
              <Route path = '/PaginaInicio' element = {<PaginaInicio />} />
              <Route path = '/PaginaTurnos' element = {<PaginaTurnos />} />
              <Route path = '/PaginaAgenda' element = {<PaginaAgenda />} />
              <Route path = '/PaginaLinks' element = {<PaginaLinks />} />
              <Route path = '/PaginaOS' element = {<PaginaOS />} />
              <Route path = '/PaginaProcesos' element = {<PaginaProcesos />} />
            </Routes>
          </Router>
      </DataProvider>
      
    </div>
  );
}

export default App;
