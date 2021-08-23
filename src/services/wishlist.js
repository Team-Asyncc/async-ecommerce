export const loadWishlist = () => {
  const data = localStorage.getItem('wishlist');
  let storedWishlist = JSON.parse(data);
  if (!storedWishlist) storedWishlist = [];
  return storedWishlist;
};

export const storeWishlist = (data) => {
  const storeData = JSON.stringify(data);
  localStorage.setItem('wishlist', storeData);
};
