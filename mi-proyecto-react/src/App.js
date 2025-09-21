import { Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Detalle from './Screens/Detalle/Detalle';
import Peliculas from './Screens/Peliculas/Peliculas';
import Series from './Screens/Series/Series';
import Favoritos from './Screens/Favoritos/Favoritos';
import Buscador from './Screens/Buscador/Buscador';


export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/favoritos" exact={true} component={Favoritos}/>
        <Route path='/detalle/:tipo/:id' exact={true} component={Detalle}/>
        <Route path="/peliculas/:tipo" exact={true} component={Peliculas}/>
        <Route path="/series/:tipo" exact={true} component={Series}/>
        <Route path="/buscador" exact={true} component={Buscador}/>
        <Route path="" component={NotFound}/>
      </Switch>
    </div>
  );
}
