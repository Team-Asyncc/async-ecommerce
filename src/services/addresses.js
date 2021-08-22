export const loadAddresses = () => {
  const data = localStorage.getItem('addresses');
  let storedOrderList = JSON.parse(data);
  if (!storedOrderList) storedOrderList = [];
  return storedOrderList;
};

export const storeAddressses = (data) => {
  const storeData = JSON.stringify(data);
  localStorage.setItem('addresses', storeData);
};
