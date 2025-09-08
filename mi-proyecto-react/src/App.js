import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Detalle from './Screens/Detalle/Detalle';
import Peliculas from './Screens/Peliculas/Peliculas';
import Series from './Screens/Series/Series';


export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path='/detalle/:tipo/:id' exact={true} component={Detalle}/>
        <Route path="/peliculas/:tipo" exact={true} component={Peliculas}/>
        <Route path="/series/:tipo" exact={true} component={Series}/>
        <Route path="" component={NotFound}/>
      </Switch>
    </div>
  );
}
