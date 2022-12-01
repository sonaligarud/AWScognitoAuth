import logo from './logo.svg';
import './App.css';
import Registration from './Auth/UserRegistration';
import VerifyCode from './Auth/VerifyCode';
import Login from './Auth/Login';
import Homepage from './Home';
import GetUsers from './MyProfile';
import { Routes, Route, Router} from 'react-router-dom';
import ForgotPassword from './Auth/ForgotPassword';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="getverificationcode/:username" element={<VerifyCode />} />
        <Route path="login" element={<Login />} />
        <Route path="Homepage" element={<Homepage/>} />
        <Route path="Myprofile" element={<GetUsers/>} />
        <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
