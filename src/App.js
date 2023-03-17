import Home from './components/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  //
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
};

export default App;
