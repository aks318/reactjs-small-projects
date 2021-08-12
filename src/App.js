import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import BoxContent from "./component/prac1/BoxContent";
import Stopwatch from './component/prac2/StopWatch';
import TableForm from './component/prac3/TableForm';

function App() {
  return (
    <div className="App">
      <Router>

        <button><Link  to = '/'>Prac1</Link></button>
        <button><Link  to = '/prac2'>Prac2</Link></button>
        <button><Link  to = '/prac3'>Prac3</Link></button>


      <Switch>
        <Route exact path = '/'><BoxContent />
        </Route>

        <Route exact path = '/prac2'><Stopwatch />
        </Route>
        
        <Route exact path = '/prac3'><TableForm /></Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;