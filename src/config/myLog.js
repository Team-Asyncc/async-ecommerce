export default function myLog(...message) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...message);
  }
}
