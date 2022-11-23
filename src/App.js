import logo from './logo.svg';
import './App.css';
import Registration from './Auth/UserRegistration';
import VerifyCode from './Auth/VerifyCode';
import { Routes, Route, Router} from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route path="registration" element={<Registration />} />
        <Route path="getverificationcode/:username" element={<VerifyCode />} />
    </Routes>
  );
}

export default App;
