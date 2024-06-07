import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Page404 from './routes/Page404.jsx';
import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='*' element={ <Page404 /> }/>
      </Routes>
    </Router>
  );
};

export default App;
