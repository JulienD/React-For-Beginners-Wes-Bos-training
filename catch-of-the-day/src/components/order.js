import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
  renderOrder = key => {
    console.log(key, 'key');
    let fish = this.props.fishes[key];
    let count = this.props.order[key];

    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {
      let fish = this.props.fishes[key];
      let count = this.props.order[key];
      return prevTotal + fish.price * count;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
