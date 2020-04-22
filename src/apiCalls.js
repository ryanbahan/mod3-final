export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = async data => {
  data = JSON.stringify(data);
  const res = await fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    headers: {
          "Content-Type": "application/json"
        },
    body: data
  })

  const json = await res.json();
  return json;
}
