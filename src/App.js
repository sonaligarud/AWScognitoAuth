import logo from './logo.svg';
import './App.css';
import Registration from './Auth/UserRegistration';
import VerifyCode from './Auth/VerifyCode';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
            <div className="col-md-6"><Registration /></div>
            <div className="col-md-6"><VerifyCode /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
