import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import BoxContent from "./component/prac1/BoxContent";
import Stopwatch from './component/prac2/StopWatch';

function App() {
  return (
    <div className="App">
      <Router>

        <Link  to = '/'>Prac1</Link>
        <Link  to = '/prac2'>Prac2</Link>


      <Switch>
        <Route exact path = '/'><BoxContent />
        </Route>

        <Route exact path = '/prac2'><Stopwatch />
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
