import logo from './logo.svg';
import './App.css';
import Registration from './Auth/UserRegistration';
import VerifyCode from './Auth/VerifyCode';
import Login from './Auth/Login';
import { Routes, Route, Router} from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="getverificationcode/:username" element={<VerifyCode />} />
        <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
