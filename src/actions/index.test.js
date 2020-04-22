import * as actions from '.';

describe("actions", () => {

  it('should have a type of SET_ORDERS', () => {
    const orders = {name: "ryan", ingredients: ["beans"]};

    const expectedAction = {
      type: "SET_ORDERS",
      orders,
    };

    const result = actions.setOrders(orders);

    expect(expectedAction).toEqual(result);
  })

})
