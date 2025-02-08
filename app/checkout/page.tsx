"use client";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import CheckoutPage from "@/components/checkoutpage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { client } from "../../sanity/lib/client";
import { useRouter } from "next/navigation";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout: React.FC = () => {

  const [checkout, setCheckout] = useState<Product[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {

    //--==== GETTING VALUES FROM CART UNDER LOCALSTORAGE ====--//
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as Product[];
    setCheckout(cart);

    //--==== TOTAL AMOUNT OF ALL PRODUCTS ====--//
    const total = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setTotalAmount(total);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //--==== USER ROUTER FOR REDIRECTING ====--//
  const router = useRouter();

  //--==== FUNCTIONALITY WHEN CLICKED ON CONFIRM ORDER ====--//
  const handleConfirmOrder = async () => {

    const customerData = {
      customerId: formData.phone,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      customerAddress: formData.address,
      customerCity: formData.city,
      customerPostalCode: formData.postalCode,
    };

    const orderData = {
      orderId: formData.phone,
      productsId: checkout.map((item) => ({
        productId: item._id,
        quantity: item.quantity || 1,
      })),
      paymentMethod: paymentMethod === "cod" ? "Cash" : "Card",
      amount: totalAmount,
    };

    try {
      //--==== SAVE CUSTOMER & ORDER DETAILS IN SANITY ====--//
      await client.create({
        _type: "customer",
        ...customerData,
      });

      await client.create({
        _type: "order",
        ...orderData,
      });

      //--==== REDIRECTING TO PAYMENT SUCCESS PAGE WHEN DETAILS SAVED SUCCESSFULLY ====--//
      router.push("/payment-success");

      //--==== CLEARING LOCALSTORAGE ====--//
      localStorage.removeItem("cart");
      localStorage.removeItem("customer");
      localStorage.removeItem("order");

      //--==== CLEARING STATE ====--//
      setCheckout([]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
      });
      setPaymentMethod("");
    } catch (error) {
      alert("Error saving order data. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-20">

      {/*--==== CHECKOUT TITLE ====--*/}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-10">
        {/*--==== BILLING DETAILS ====--*/}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          {/*--==== TITLE ====--*/}
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          {/*--==== FORM ====--*/}
          <form>
            {["name", "email", "phone", "address", "city", "postalCode"].map(
              (field, index) => (
                <div className="mb-4" key={index}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace("Code", " Code")}
                  </label>
                  <input
                    required
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={`Enter your ${field}`}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#029FAE] focus:border-[#029FAE]"
                  />
                </div>
              )
            )}

          {/*--==== DELIVERY ====--*/}
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            <div className="mb-4">
              <div className="flex items-center space-x-4">

                {/*--==== CASH ON DELIVERY ====--*/}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    className="form-radio text-[#029FAE] focus:ring-[#029FAE]"
                    onChange={() => setPaymentMethod("cod")}
                    checked={paymentMethod === "cod"}
                  />
                  <span className="text-sm font-medium text-gray-700">Cash on Delivery</span>
                </label>

                {/*--==== PAY BY CARD ====--*/}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    className="form-radio text-[#029FAE] focus:ring-[#029FAE]"
                    onChange={() => setPaymentMethod("card")}
                    checked={paymentMethod === "card"}
                  />
                  <span className="text-sm font-medium text-gray-700">\Pay by Card\</span>
                </label>
              </div>
            </div>

            {/*--==== IF PAYMENT METHOD IS COD ====--*/}
            {paymentMethod === "cod" && (
              <button
                type="button"
                onClick={handleConfirmOrder}
                className="text-white w-full bg-[#029FAE] p-2 mt-[30px] rounded-md font-bold disabled:opacity-50"
              >
                Confirm Order
              </button>
            )}

            {/*--==== IF PAYMENT METHOD IS CARD ====--*/}
            {paymentMethod === "card" && (
              <main className="max-w-6xl mx-[-20px] p-10 text-center mt-[-30px]">
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: convertToSubcurrency(totalAmount),
                    currency: "usd",
                  }}
                >
                  <CheckoutPage amount={totalAmount} />
                  <button
                    type="button"
                    onClick={handleConfirmOrder}
                    className="text-white w-full bg-[#029FAE] p-2 mt-[30px] rounded-md font-bold disabled:opacity-50"
                  >
                    Confirm Order
                  </button>
                </Elements>
              </main>
            )}
          </form>
        </div>

        {/*--==== ORDER SUMMARY ====--*/}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          {/*--==== TITLE ====--*/}
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {/*--==== PRODUCT IMAGE, QUANTITY AND TOTAL AMOUNT ====--*/}
          {checkout.length > 0 ? (
            <ul className="space-y-4">
              {checkout.map((item) => (
                <li key={item._id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-16 h-16 flex-shrink-0">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="rounded-md object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
                          <span>No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[14px] sm:font-semibold">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}

          <div className="max-w-md mx-auto p-4 border-t mt-4">

            {/*--==== SUBTOTAL ====--*/}
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-900 font-semibold">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            {/*--==== SHIPPING ====--*/}
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Shipping</span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>

            {/*--==== TOTAL ====--*/}
            <div className="flex justify-between items-center py-4 border-t mt-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-xl font-bold text-black">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
