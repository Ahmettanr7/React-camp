import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"/>
      <Container>
        <Dashboard></Dashboard>
      </Container>
      
    </div>
  );
}

export default App;
