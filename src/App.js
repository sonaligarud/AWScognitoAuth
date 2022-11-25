import logo from './logo.svg';
import './App.css';
import Registration from './Auth/UserRegistration';
import VerifyCode from './Auth/VerifyCode';
import Login from './Auth/Login';
import Homepage from './Home';
import { Routes, Route, Router} from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="getverificationcode/:username" element={<VerifyCode />} />
        <Route path="login" element={<Login />} />
        <Route path="Homepage" element={<Homepage/>} />
    </Routes>
  );
}

export default App;
