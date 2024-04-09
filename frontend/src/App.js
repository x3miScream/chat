import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Hpme.jsx';

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home></Home>
      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
