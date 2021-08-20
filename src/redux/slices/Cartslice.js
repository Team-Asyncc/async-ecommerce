import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 1,
      title: 'Full Sleeves Tee',
      description:
        '18 to 24 Months, Navy Blue round neck tee with back button and sequinned rainbow detailing',
      price: 400,
      img: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/8615268a.webp',
      type: ['top', 'shirt', 'kids', 'girls', 'boys'],
      category: "kids' wear",
      inCart: false,
      quantity: 0,
      rating: 4,
    },
    {
      id: 2,
      title: 'Full Sleeves Blue Night Suit',
      description:
        '18 to 24 Months, A round neck top with soft elastic track pants for a cosy night for kids',
      price: 549,
      img: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/9554531a.webp',
      type: [
        'top',
        'pants ',
        'shorts',
        'shirt',
        'pant',
        'jeans',
        'trouser',
        'trousers',
        'lowers',
        'boys',
        'girls',
      ],
      category: "kids' wear",
      inCart: false,
      quantity: 0,
      rating: 4,
    },
    {
      id: 3,
      title: ' Floral Print Frock',
      description:
        '12 to 18 Months, round neck pullover with three fourth sleeves frock with front buttons closure for girls',
      price: 599,
      img: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/9351128a.webp',
      type: ['top', 'shirt', 'women', 'girl', 'frock', 'dress'],
      category: "kids' wear",
      inCart: false,
      quantity: 0,
      rating: 2,
    },
    {
      id: 4,
      title: ' Zig Zag Print Palazzo - Multi Color',
      description:
        "5 to 6 Years, Breezy and light bottoms for your baby's comfort with zig-zag print and knot belt",
      price: 469,
      img: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/8490608a.webp',
      type: ['pant', 'trousers', 'lowers', 'jeans', 'trouser', 'girls'],
      category: "kids' wear",
      inCart: false,
      quantity: 0,
      rating: 4,
    },
  ],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    removeItem: (state, action) =>
      state.filter((item) => {
        console.log(item.id, action.payload);
        return item.id !== action.payload;
      }),
    incItem: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload && item.quantity !== 4)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
      return newState;
    },
    decItem: (state, action) => {
      const newState = state.map((item) => {
        if (item.id === action.payload && item.quantity !== 0)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
      return newState;
    },
  },
});
export const { addItem, removeItem, incItem, decItem } = cartSlice.actions;

export default cartSlice.reducer;
