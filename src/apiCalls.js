export const getOrders = async () => {
  const res = await fetch('http://localhost:3001/api/v1/orders');
  const json = await res.json();
  return json;
}

export const postOrder = async data => {
  data = JSON.stringify(data);
  const res = await fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    headers: {
          "Content-Type": "application/json"
        },
    body: data
  });

  const json = await res.json();
  return json;
}

export const deleteOrder = async id => {
  const res = await fetch(`http://localhost:3001/api/v1/orders/${id}`, {
    method: "DELETE",
  });

  return res.status;
}
