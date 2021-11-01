import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./pages/home/home.index";
import {AboutMe} from "./pages/about/about.index";

const App = () => {
    return(
            <Router>
                <Switch>
                    <Route path='/about'>
                        <AboutMe />
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
    )
}

export default App;
