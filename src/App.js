

import { Button } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Admin from './components/admin';
import Animations from './components/animation';
import Blankpage from './components/blankpage';
import Borders from './components/borders';
import Buttons from './components/buttons';
import Cards from './components/cards';
import Charts from './components/charts';
import Colours from './components/colours';
import Forget from './components/forgetpassword';
import Login from './components/login';

import Others from './components/others';
import Errorpage from './components/page404';
import Register from './components/register';
import Tables from './components/tables';
import Navb from './components/nav';



function App() {


  // const [user, setUser] = useState(data)

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Admin
          />
        </Route>


        <Route path="/buttons">
          <Buttons
          />
        </Route>

        <Route path="/cards">
          <Cards
          />
        </Route>

        <Route path="/animations">
          <Animations
          />
        </Route>

        <Route path="/blankpage">
          <Blankpage
          />
        </Route>


        <Route path="/borders">
          <Borders
          />
        </Route>


        <Route path="/charts">
          <Charts
          />
        </Route>


        <Route path="/colours">
          <Colours
          />
        </Route>

        <Route path="/nav">
          <Navb
          />
        </Route>
        <Route path="/forgetpassword">
          <Forget
          />
        </Route>


        <Route path="/login">
          <Login
          />
        </Route>

        <Route path="/others">
          <Others
          />
        </Route>

        <Route path="/errors">
          <Errorpage
          />
        </Route>


        <Route path="/register">
          <Register
          />
        </Route>


        <Route path="/tables">
          <Tables
          />
        </Route>

        <Route path = "**">
            <Errorpage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

