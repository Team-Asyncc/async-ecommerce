export const loadOrders = () => {
  const data = localStorage.getItem('orders');
  let storedOrderList = JSON.parse(data);
  if (!storedOrderList) storedOrderList = [];
  return storedOrderList;
};

export const storeOrders = (data) => {
  console.log('called to store order locally');
  const storeData = JSON.stringify(data);
  localStorage.setItem('orders', storeData);
};
