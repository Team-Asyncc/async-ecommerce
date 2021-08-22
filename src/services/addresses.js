export const loadAddresses = () => {
  const data = localStorage.getItem('addresses');
  let storedAddress = JSON.parse(data);
  if (!storedAddress)
    storedAddress = {
      storedAddresses: [],
      selectedAddress: [],
    };
  return storedAddress;
};

export const storeAddressses = (data) => {
  const storeData = JSON.stringify(data);
  localStorage.setItem('addresses', storeData);
};
