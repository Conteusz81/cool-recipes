import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './styles/main.css';
import NavBar from "./components/organisms/NavBar";
import Recipes from "./components/organisms/Recipes";
import About from "./components/organisms/About";
import Contact from "./components/organisms/Contact";
import Login from "./components/organisms/Login";
import Register from "./components/organisms/Register";
import UserNav from "./components/molecules/UserNav";
import MainTemplate from "./components/templates/MainTemplate";
import { routes } from "./routes/routes";
import { pathNameSlice } from "./utils/parsers";

const App = () => {
  return (
      <BrowserRouter>
          <div className="text-gray-600 font-body grid md:grid-cols-3">
              <NavBar />
              <MainTemplate>
                  <UserNav />
                  <Switch>
                      <Route exact path={routes.home} render={() => <Redirect to={routes.recipes} />} />
                      <Route
                          path={routes.recipes}
                          render={({location}) => <Recipes pathname={pathNameSlice(location.pathname)}/>}
                      />
                      <Route
                          path={routes.about}
                          render={({location}) => <About pathname={pathNameSlice(location.pathname)}/>}
                      />
                      <Route
                          path={routes.contact}
                          render={({location}) => <Contact pathname={pathNameSlice(location.pathname)}/>}
                      />
                      <Route
                          path={routes.login}
                          render={({location}) => <Login pathname={pathNameSlice(location.pathname)}/>}
                      />
                      <Route
                          path={routes.register}
                          render={({location}) => <Register pathname={pathNameSlice(location.pathname)}/>}
                      />
                  </Switch>
              </MainTemplate>
          </div>
      </BrowserRouter>
  );
}

export default App;
