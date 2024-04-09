import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Hpme.jsx';
import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
