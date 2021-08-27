import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Deal from "./components/Deal/Deal";
import Admin from "./components/Dashboard/Admin/Admin";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NoMatch from "./components/NoMatch/NoMatch"
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({})
  return (
    <UserContext.Provider value={{loggedInUser,setLoggedInUser,cart,setCart}} >
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
          <PrivateRoute path="/checkout">
            <Header />
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Header />
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/deal">
            <Header />
            <Deal />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/panel/:adminPanel">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
