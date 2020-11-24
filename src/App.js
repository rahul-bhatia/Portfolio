import './App.css';
import {BrowserRouter as Router,HashRouter,Route} from 'react-router-dom';
import Home from './pages';


function App() {
  return (
   <HashRouter basename="/">
 {/* <Router >
   <Home/>
   </Router> */}
   <Route path="/" component={Home}/>
   </HashRouter>
  );
}

export default App;
