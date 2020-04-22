import { orders } from './orders';

describe("ordersReducer", () => {

  it("should return the initial state", () => {
    const expected = [];
    const result = orders(undefined, {});
    expect(expected).toEqual(result);
  })

  it("should return orders on action SET_ORDERS", () => {
    const expected = [{name: "ryan", ingredients: "beans"}, {name: "tommy", ingredients: "sour cream"}];

    const result = orders([], {
      type: "SET_ORDERS", orders: [{name: "ryan", ingredients: "beans"}, {name: "tommy", ingredients: "sour cream"}]
    });
    expect(expected).toEqual(result);
  })

})
