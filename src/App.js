import React, { Component } from 'react';
import './App.css';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./styles/css/style.css";

import "@blueprintjs/table/lib/css/table.css";
import { OrderBookContainer, OrderFormContainer, CoinSearchContainer } from "./containers";
import SimpleChart from "./components/DepthChart";
import * as coinsList from "./jsons/coinsList.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<SimpleChart/>*/}
      </div>
    );
  }
}

export default App;
