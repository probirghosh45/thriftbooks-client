import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Deal from "./components/Deal/Deal";
import Admin from "./components/Dashboard/Admin/Admin";
import ManageBooks from "./components/Dashboard/ManageBooks/ManageBooks";
import AddBooks from "./components/Dashboard/ManageBooks/AddBooks";
import EditBooks from "./components/Dashboard/ManageBooks/EditBooks";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/home">
          <Header />
          <Home />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/order">
          <Header />
          <Orders />
        </Route>
        <Route path="/deal">
          <Header />
          <Deal />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/panel/:adminPanel">
          <Admin />
        </Route>
      {/* <Route path="/manageBooks">
          <ManageBooks/>
        </Route>
        <Route path="/addBooks">
          <AddBooks/>
        </Route>
        <Route path="/editBooks">
          <EditBooks/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
