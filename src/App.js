import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Join from './pages/Join';
 import  { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
     <Switch>
     <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/join" component={Join} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
