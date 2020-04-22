import React from 'react';
import App from './App';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/';


describe("OrderForm", () => {
  const store = createStore(rootReducer);
  let utils;

  beforeEach(() => {
    utils = render(<Provider store={store}><App /></Provider>)
  })

  it("should render the correct content", () => {
    const { getByText } = utils;

    const header = getByText("Burrito Builder");
    const placeholder = getByText("No orders yet!");

    expect(header).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  })

  it("should render the correct content when buttons are clicked", async () => {
    const { debug, getByText } = utils;

    const beans = getByText('beans');

    fireEvent.click(beans);

    const orderStatus = await waitFor(() => getByText("Order: beans"));

    expect(orderStatus).toBeInTheDocument();
  })

})
