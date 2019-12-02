import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings:-3.85,
      taxes:0
    };
  }


  render() {
    return (
      <div className="container" >
        <Container className="purchase-card">
        <SubTotal price={this.state.total.toFixed(2)}  />
        <PickupSavings price={this.state.PickupSavings} />
        <TaxesFees taxes={this.state.taxes.toFixed(2)} />
        </Container>
      </div>
    );
  }
}

export default App;
