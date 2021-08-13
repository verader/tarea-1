import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

import StarShips from "./pages/starships/starships.component";
import Planets from "./pages/planets/planets.component";
import { tsConstructorType } from "@babel/types";

class App extends React.Component {
  constructor(){
    super();
    //this.state HERE
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){

  }

  render (){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />          
          <Route path="/starships" component={StarShips} />
          <Route path="/planets" component={Planets} />
        </Switch>
      </div>
    );
  }

}

export default App;
