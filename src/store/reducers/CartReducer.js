import { ADD_CART } from "../Actions/Actions";
import { DELETE_CART } from "../Actions/Actions";

const initialState = {
  products: [],
  totalPrice: 0,
  discountPrice: 0,
  netPrice: 0,
  Quantity: 0,
  netQuantity: 0,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      const { product, quantity, discount, price } = action.payload;
      const len = state.products.length + 1;
      const check = state.products.find((e) => e.id === product.id);

      product.quantity = quantity;
      const DiscountRound = Math.round(discount);
      const netPriceRound = Math.round(state.netPrice + discount);
      const Tquantity = state.netQuantity + product.quantity;
      if (check) return state;
      else {
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: price,
          Quantity: quantity,
          discountPrice: DiscountRound,
          netPrice: netPriceRound,
          netQuantity: len,
        };
      }
    case "INC":
      const check2 = state.products.find((e) => e.id === action.payload.id);
      console.log(check2);
      const index = state.products.findIndex((e) => e.id === action.payload.id);
      let prdDiscount = state.discountPrice;
      let prdPrice = state.totalPrice;
      const netPriceRound1 = Math.round(state.netPrice + check2.discount);
      const discountPriceRound = Math.round(prdDiscount + check2.discount);

      check2.quantity += 1;
      console.log(check2);
      state.products[index] = check2;
      let prdQuantity = state.netQuantity + 1;
      if (check2)
        return {
          ...state,
          Quantity: check2.quantity,
          discountPrice: discountPriceRound,
          totalPrice: prdPrice + check2.price,
          netPrice: netPriceRound1,
        };
      else return state;

    case "DEC":
      const checkDec = state.products.find((e) => e.id === action.payload.id);
      const indexDec = state.products.findIndex(
        (e) => e.id === action.payload.id
      );

      let prdQuantity1 = state.netQuantity - 1;

      if (checkDec.quantity > 1) {
        checkDec.quantity -= 1;
        state.products[indexDec] = checkDec;
        const netPriceRound2 = Math.round(state.netPrice - checkDec.discount);
        const discountPriceRound2 = Math.round(
          state.discountPrice - checkDec.discount
        );
        return {
          ...state,
          discountPrice: discountPriceRound2,
          totalPrice: state.totalPrice - checkDec.price,
          netPrice: netPriceRound2,
        };
      } else return state;

    case DELETE_CART:
      const checkDel = state.products.find((e) => e.id === action.payload.id);
      const filter = state.products.filter((e) => e.id !== action.payload.id);
      const netPriceRound3 = Math.round(
        state.netPrice - checkDel.discount * checkDel.quantity
      );

      return {
        ...state,
        products: filter,
        netQuantity: state.netQuantity - 1,
        netPrice: netPriceRound3,
      };

    default:
      return state;
  }
}
