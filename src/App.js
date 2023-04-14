import './App.scss';
import Login from './pages/Login';
import Register from './pages/Register'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RestInfo from './pages/RestInfo';
import Home from './pages/home';
import FoodMenus from './pages/FoodMenus';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/restinfo' element={<RestInfo />} />
        <Route path='/' element={<Home />} />
        <Route path='/foodmenus' element={<FoodMenus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
