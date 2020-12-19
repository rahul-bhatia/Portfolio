import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages';
import Test from './components/test';



function App() {
  return ( 
    <div>
      <Route exact path="/" component={Home}/> 
      <Route path="/test" component={Test} />
    </div>
  
  );
}

export default App;
