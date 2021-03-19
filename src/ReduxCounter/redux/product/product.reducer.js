import { INCR, DECR } from "../product/product.action";
let initialState = {
  product_Name: "Philips BT40 Portable Bluetooth Speaker",
  product_Image:
    "https://rukminim1.flixcart.com/image/224/224/jb6tksw0/speaker/mobile-tablet-speaker/v/u/7/philips-in-bt40bk-94-original-imafyhffk49hxvga.jpeg?q=90",
  product_Price: 1299,
  product_QTY: 1,
};

let productReducer = (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case INCR:
      return {
        ...state,
        product_QTY: state.product_QTY + 1,
      };
    case DECR:
      return { ...state, product_QTY: state.product_QTY - 1 };
    default:
      return state;
  }
};

export default productReducer;