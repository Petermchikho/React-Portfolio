import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/Vandetails';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Income from './pages/Host/Income';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVansDetails  from './pages/Host/HostVansDetails';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import "./server"
function App() {
  return (
    <BrowserRouter>
      
      
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetails />}/>
          <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVansDetails />}>
                   <Route index element={<HostVanInfo />}/>
                  <Route path='pricing' element={<HostVanPricing />} />
                  <Route path='photos' element={<HostVanPhotos />} />
              </Route>
              <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
     </Routes>
  </BrowserRouter>
  );
}

export default App;
