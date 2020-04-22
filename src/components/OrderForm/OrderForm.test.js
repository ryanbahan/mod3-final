import React from 'react';
import OrderForm from './OrderForm';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/';
import { getOrders, postOrder } from '../../apiCalls';


describe("OrderForm", () => {
  const store = createStore(rootReducer);
  let utils;

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        orders: [{name: "ryan", ingredients: ["beans"]}]
      })
    }))

  beforeEach(() => {
    utils = render(<Provider store={store}><OrderForm /></Provider>)
  })

  it("should render the correct content", () => {
    const { getByPlaceholderText, getByText } = utils;

    const input = getByPlaceholderText("Name");
    const beans = getByText("beans");
    const steak = getByText("steak");
    const carnitas = getByText("carnitas");
    const sofritas = getByText("sofritas");
    const lettuce = getByText("lettuce");
    const quesoFresco = getByText("queso fresco");
    const pico = getByText("pico de gallo");
    const hotSauce = getByText("hot sauce");
    const guac = getByText("guacamole");
    const jalapenos = getByText("jalapenos");
    const cilantro = getByText("cilantro");
    const sourCream = getByText("sour cream");
    const submit = getByText("Submit Order");

    expect(input).toBeInTheDocument();
    expect(beans).toBeInTheDocument();
    expect(steak).toBeInTheDocument();
    expect(carnitas).toBeInTheDocument();
    expect(sofritas).toBeInTheDocument();
    expect(lettuce).toBeInTheDocument();
    expect(quesoFresco).toBeInTheDocument();
    expect(pico).toBeInTheDocument();
    expect(hotSauce).toBeInTheDocument();
    expect(guac).toBeInTheDocument();
    expect(jalapenos).toBeInTheDocument();
    expect(cilantro).toBeInTheDocument();
    expect(sourCream).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  })

  it("should have submit disabled by default", () => {
    const { getByText } = utils;
    const submit = getByText("Submit Order");

    expect(submit).toHaveAttribute('disabled')
  })

  it("should enable submission when an item is added to the order", () => {
    const { getByText, debug } = utils;
    const beans = getByText("beans");
    const submit = getByText("Submit Order");

    fireEvent.click(beans);
    fireEvent.click(submit);

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledTimes(1);
  })

})
