import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Hpme.jsx';
import {Navigate, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {useAuthContext} from './Context/AuthContext.jsx';

function App() {
  const {authUser} = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path='/' element={(authUser ? <Home></Home> : <Navigate to='/login'></Navigate>)}></Route>
        <Route path='/login' element={(authUser ? <Navigate to='/'></Navigate> : <Login></Login>)}></Route>
        <Route path='/signup' element={ (authUser ? <Navigate to='/'></Navigate> : <Signup></Signup>) }></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
