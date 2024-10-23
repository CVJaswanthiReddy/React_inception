import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./Fooditem"; // Ensure the path is correct
import { clearCart, removeItem } from "../utilis/cartSlice"; // Ensure the path is correct

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    console.log("Removing item with ID:", id); // Debug statement
    dispatch(removeItem({ id }));
  };

  return (
    <div className="pt-20 p-6 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Cart Items ({cartItems.length})
        </h1>
        <div className="flex justify-center mb-6">
          <button
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition-colors duration-300"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white p-4 rounded-lg shadow-lg border border-gray-200"
              >
                <FoodItem
                  cloudinaryImageId={item.imageId}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
                <button
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors duration-300"
                  onClick={() => handleRemoveItem(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
