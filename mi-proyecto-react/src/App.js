import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound'


export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="" component={NotFound}/>
      </Switch>
    </div>
  );
}
