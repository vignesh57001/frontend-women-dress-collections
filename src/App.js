import "./App.css";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Home from "./all-pages/Home";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Cartscreen from "./all-pages/Cartscreen";
import Registerscreen from "./all-pages/Registerscreen";
import Loginscreen from "./all-pages/Loginscreen";
import Ordersscreen from "./all-pages/Ordersscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/orders" exact component={Ordersscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
