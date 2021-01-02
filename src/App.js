import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Products from "./Components/Products";
import Admin from "./Components/Admin Area";
import Logged from "./Components/Logged";
import Product from "./Components/product";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Route path="/home" component={Home} />
        <Route path='/category' component={Category}/>
        <Route path='/products' component={Products}/>
        <Route exact path='/adminArea' component={Admin}/>
        <Route exact path='/adminArea/logged' component={Logged}/>
      </Router>
    </div>
  );
}

export default App;
