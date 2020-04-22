import React from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';

class Orders extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  orderEls = () => this.props.orders.map(order => {
    return (
      <div className="order" key={Date.now() + Math.random()}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={Date.now() + Math.random()}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  render() {
      return (
      <section>
        { this.orderEls().length ? this.orderEls() : <p>No orders yet!</p> }
      </section>
    )
  }
}

const mapStateToProps = ({ orders }) => ({
  orders
});

const mapDispatchToProps = dispatch => (
  {
    setOrders: (orders) => dispatch(setOrders(orders))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
