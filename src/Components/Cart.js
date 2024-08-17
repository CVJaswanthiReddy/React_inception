import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./Fooditem";
import { clearCart } from "../utilis/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="pt-20 p-5 bg-gray-50">
      <h1 className="font-bold text-3xl">Cart Items-{cartItems.length}</h1>
      <button
        className="text-black-600 hover:text-black-800 hover:bg-orange-400 rounded-lg"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem
            key={item.id} // Ensure each FoodItem has a unique key
            cloudinaryImageId={item.imageId} // Ensure this matches the field in item
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
