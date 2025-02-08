"use client";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  badge: string | null;
  image: string;
  description: string;
  inventory: number;
  quantity?: number;
}

const CartSummary = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  //--=== GETTING VALUE FROM LOCALSTORAGE ===--//
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

   //--=== HANDLE CHECKOUT CLICK ===--//
  const router = useRouter();
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      router.push('/checkout');
    } else {
      alert("Your cart is empty. Add items before proceeding to checkout.");
    }
  };

  //--=== UPDATE LOCAL STORAGE AND CART STATE ===--//
  const updateLocalStorage = (updatedCart: Product[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  //--=== QUANTITY INCREMENT & DECREMENT ===--//
  const updateQuantity = (id: string, increment: boolean) => {
    const updatedCart = cartItems
      .map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(0, (item.quantity || 1) + (increment ? 1 : -1)) }
          : item
      )
      .filter((item) => item.quantity && item.quantity > 0);
    updateLocalStorage(updatedCart);
  };

  //--=== REMOVE ITEM FROM CART ===--//
  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    updateLocalStorage(updatedCart);
  };

  //--=== TOTAL AMOUNT ===--//
  const total = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    
    <div>
      <div className="flex justify-center items-center px-[20px] sm:px-[0] py-[30px] lg:py[0] h-auto w-[100%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/*--==== PRODUCTS ====--*/}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6" data-aos="fade-right">Bag</h2>
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-lg font-semibold text-gray-600" data-aos="fade-right">
                  Your bag is empty. Start shopping to fill it up!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-start border-b border-gray-200 pb-6" data-aos="zoom-in">
                    {/*--==== IMAGE ====--*/}
                    <div className="w-24 h-24 flex-shrink-0">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={96}
                          height={96}
                          className="rounded-md object-cover"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
                          <span>No Image</span>
                        </div>
                      )}
                    </div>

                    {/*--==== PRODUCT DETAILS ====--*/}
                    <div className="flex-1 px-4">
                      <h3 className="text-[12px] sm:text-lg font-medium text-gray-800">{item.title}</h3>
                      <div className="text-[10px] sm:text-sm text-gray-500 flex gap-[4px] mb-[10px]">
                        <p>Quantity:</p>
                        <div className="flex gap-[5px]">
                          <p className="cursor-pointer mt-[-2px] text-[18px]" onClick={() => updateQuantity(item._id, false)}>-</p>
                          <p>{item.quantity || 1}</p>
                          <p className="cursor-pointer text-[15px]" onClick={() => updateQuantity(item._id, true)}>+</p>
                        </div>
                      </div>
                      <div className="flex gap-[10px] text-gray-600">
                        <i className="bx bx-trash cursor-pointer" onClick={() => removeItem(item._id)}></i>
                      </div>
                    </div>

                    {/*--===== PRICE =====--*/}
                    <div className="text-right">
                      <p className="text-[10px] sm:text-sm font-medium text-gray-800">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/*----===== CHECKOUT =====----*/}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-right">Summary</h3>
            <div className="space-y-4" data-aos="zoom-in">

              {/*--==== SUBTOTAL ====--*/}
              <div className="flex justify-between text-sm text-gray-600">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              {/*--==== DELIVERY ====--*/}
              <div className="flex justify-between text-sm text-gray-600">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              {/*--==== TOTAL ====--*/}
              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-800">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>

            </div>

            {/*--==== CHECKOUT BUTTON ====--*/}
            <button onClick={handleCheckout} disabled={cartItems.length === 0} className="mt-6 w-full bg-[#029FAE] text-white text-center py-3 rounded-full font-medium" data-aos="fade-right">Member Checkout</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartSummary;
