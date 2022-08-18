import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Join from './pages/Join';
 import  { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import User from './pages/User';
import Gigs from './pages/Gigs';
import Creategigs from './pages/CreateGigs';
import Creategig2 from './pages/CreateGig2';
import Buyer from './pages/Buyer';
import PostJob from './pages/PostJob';
import MyPost from './pages/MyPost';
function App() {
  return (
    <Router>
     <Switch>
     <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/user/" component={User} />
        <Route exact path="/user/gigs" component={Gigs} />
        <Route exact path="/create-gigs" component={Creategigs} />
        <Route exact path="/create-gigs/price" component={Creategig2} />
        <Route exact path="/buyer" component={Buyer} />
        <Route exact path="/post-request" component={PostJob} />
        <Route exact path="/mypost" component={MyPost} />
      </div>
      </Switch>
    </Router>
  );
}
export default App;
