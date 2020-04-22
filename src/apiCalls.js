export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = data => {
  data = JSON.stringify(data);
  return fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    headers: {
          "Content-Type": "application/json"
        },
    body: data
  })
  .then(response => response.json())
  .then(data => console.log(data))
}
