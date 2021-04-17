import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/signin">
        <Signin/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/create">
        <CreatePost/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
