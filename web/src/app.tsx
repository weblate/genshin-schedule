import React, { ReactNode } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./app.css";

import Background from "./background";
import Header from "./header";
import Footer from "./footer";
import Home from "./routes/home";
import Map from "./routes/map";
import Customize from "./routes/customize";
import CharacterInfo from "./routes/character";
import WeaponInfo from "./routes/weapon";
import ArtifactInfo from "./routes/artifact";
import NotFound from "./routes/notfound";

const App = () => {
  return (
    <Base>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/map" exact render={() => <Map />} />
        <Route path="/customize" exact render={() => <Customize />} />

        <Route
          path="/characters/:character"
          exact
          render={({
            match: {
              params: { character },
            },
          }) => <CharacterInfo character={character} />}
        />

        <Route
          path="/weapons/:weapon"
          exact
          render={({
            match: {
              params: { weapon },
            },
          }) => <WeaponInfo weapon={weapon} />}
        />

        <Route
          path="/artifacts/:artifact"
          exact
          render={({
            match: {
              params: { artifact },
            },
          }) => <ArtifactInfo artifact={artifact} />}
        />

        <Route render={() => <NotFound />} />
      </Switch>
    </Base>
  );
};

// no header/footer in special routes
const specialRoutes = ["/map"];

const Base = ({ children }: { children?: ReactNode }) => {
  return (
    <BrowserRouter>
      <Switch>
        {specialRoutes.map((route) => (
          <Route path={route}>{children}</Route>
        ))}

        <Route>
          <Background />
          <Header />

          {children}

          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;