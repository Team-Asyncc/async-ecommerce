export const loadWishlist = () => {
  const data = localStorage.getItem('wishlist');
  let storedWishlist = JSON.parse(data);
  if (!storedWishlist) storedWishlist = [];
  return storedWishlist;
};

export const storeWishlist = (data) => {
  console.log('called to store wishlist locally');
  const storeData = JSON.stringify(data);
  localStorage.setItem('wishlist', storeData);
};
