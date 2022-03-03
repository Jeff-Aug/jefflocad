import { ToastContainer } from 'react-toastify';
import './App.css';

import  'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

//https://sujeitoprogramador.com/r-api/?api=filmes/
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <ToastContainer autoClose={3000} />
        <Routes/>
      {/* </header> */}
    </div>
  );
}

export default App;
