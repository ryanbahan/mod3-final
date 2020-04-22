import React, { Component } from 'react';
import { postOrder, getOrders } from '../../apiCalls';
import { connect } from 'react-redux';
import { setOrders } from '../../actions';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = async e => {
    e.preventDefault();
    const data = {name: this.state.name, ingredients: this.state.ingredients};
    const order = await postOrder(data);
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));

    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  checkActiveIngredient = (ingredient) => {
    if (this.state.ingredients.find(item => item === ingredient)) {
      return true
    } else {
      return false;
    }
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)} disabled={this.checkActiveIngredient(ingredient)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
          required
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button disabled={!this.state.ingredients.length}>
          Submit Order
        </button>
        <button onClick={() => this.clearInputs()}>Clear order</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    setOrders: (orders) => dispatch(setOrders(orders))
  }
);

export default connect(null, mapDispatchToProps)(OrderForm);
