import React from "react";
import "./CurrencyConvert.css";
import { taux } from "./data";
//import { Button, Form, Row, Col, Container, Input } from "react-bootstrap";

class CurrencyConvert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* taux: {
        EUR: {
          EUR: 1,
          GBP: 0.882047,
          USD: 1.23396,
        },
        USD: {
          USD: 1,
          GBP: 0.72007,
          EUR: 0.813399,
        },
        GBP: {
          GBP: 1,
          USD: 1.636492,
          EUR: 1.196476,
        },
      },*/
      taux: taux,
      currencies: ["EUR", "USD", "GBP"],
      base: "EUR",
      convertTo: "USD",
      amount: 0,
      result: 0,
    };
  }

  handleInput = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.calculate
    );
  };
  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    /* if(Number.isNaN(amount) || amount == 0){
            return
        }else{ */
    let rates = this.state.taux;
    /*console.log(rates);
            console.log(rates.EUR);
            console.log(rates.EUR['USD']);
            console.log(this.state.taux.EUR['USD']);*/
    // les taux correspond aux devise base
    let tauxBase = rates[this.state.base];
    //console.log(tauxBase);
    // taux correspond aux devise destination
    let tauxDest = tauxBase[this.state.convertTo];
    //console.log(tauxDest);
    let result = amount * tauxDest;
    this.setState({
      result,
    });
    //} // fin else
  };

  render() {
    return (
      <div>
        <div className="conteneur">
          <h2>conversion de devises</h2>
          <div className="convertFields">
            <input
              name="amount"
              type="number"
              min={0}
              value={this.state.amount}
              onChange={this.handleInput}
            />

            <select
              name="base"
              value={this.state.base}
              onChange={this.handleSelect}
            >
              {this.state.currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <input
              name="result"
              value={this.state.result}
              type="number"
              min={0}
              onChange={this.handleInput}
            />

            <select
              name="convertTo"
              value={this.state.convertTo}
              onChange={this.handleSelect}
            >
              {this.state.currencies.map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default CurrencyConvert;
