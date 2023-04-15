import './App.scss';
import Login from './pages/Login';
import Register from './pages/Register'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RestInfo from './pages/RestInfo';
import Home from './pages/home';
import FoodMenus from './pages/FoodMenus';
import Welcome from './components/Welcome';
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import { AddItemContextProvider } from './context/AddItemContext';
import { ItemEditContextProvider } from './context/ItemEditContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/restinfo' element={<RestInfo />} />
        <Route path='/' element={<Home body={<Welcome />}/>} />
        <Route path='/foodmenus' element={<Home body={
          <ItemEditContextProvider>
          <AddItemContextProvider>
            < FoodMenus/>
          </AddItemContextProvider>
          </ItemEditContextProvider> } />} />
        <Route path='/dashboard' element={<Home body={< Dashboard />} />} />
        <Route path='/settings' element={<Home body={< Settings />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
