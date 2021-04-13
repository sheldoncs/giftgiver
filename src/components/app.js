import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "../helper/index";

class App extends Component {
  state = { gifts: [] };
  addGift = () => {
    let tempState = { ...this.state };
    let gifts = tempState.gifts;
    const ids = gifts.map((gift) => gift.id);
    const max_id = max_number(ids);
    gifts.push({ id: max_id + 1 });
    tempState.gifts = gifts;
    this.setState({ ...tempState });
  };
  removeGift = (id) => {
    let tempState = { ...this.state };
    const gifts = tempState.gifts.filter((gift) => gift.id);
    tempState.gifts = gifts;
    this.setState({ ...tempState });
  };
  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map((gift) => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
