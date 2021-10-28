import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import BoxContent from "./component/prac1/BoxContent";
import Stopwatch from './component/prac2/StopWatch';
import TableForm from './component/prac3/TableForm';
import AgeIncrement from './component/prac4/AgeIncrement';
import BoxSearch from './component/prac5/BoxSearch';
import HooksPrac from './component/prac6/HooksPrac';

function App() {
  return (
    <div className="App">
      <Router>

        <button style = {{width : "100px"}}><Link  to = '/'>Prac1</Link></button>
        <button style = {{width : "100px"}}><Link  to = '/prac2'>Prac2</Link></button>
        <button style = {{width : "100px"}}><Link  to = '/prac3'>Prac3</Link></button>
        <button style = {{width : "100px"}}><Link  to = '/prac4'>Prac4</Link></button>
        <button style = {{width : "100px"}}><Link  to = '/prac5'>Prac5</Link></button>
        <button style = {{width : "100px"}}><Link  to = '/prac6'>Prac6</Link></button>



      <Switch>
        <Route exact path = '/'><BoxContent />
        </Route>

        <Route exact path = '/prac2'><Stopwatch />
        </Route>
        
        <Route exact path = '/prac3'><TableForm /></Route>
        <Route exact path = '/prac4'><AgeIncrement /></Route>
        <Route exact path = '/prac5'><BoxSearch /></Route>
        <Route exact path = '/prac6'><HooksPrac /></Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
