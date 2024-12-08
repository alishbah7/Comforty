import Image from "next/image";

const CartSummary = () => {
  return (
    <section className="py-8 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bag Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bag</h2>
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start border-b border-gray-200 pb-6">
              <div className="w-24 h-24 flex-shrink-0">
                <Image
                  src="/images/stool1.png"
                  alt="Library Stool Chair"
                  width={96}
                  height={96}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1 px-4">
                <h3 className="text-lg font-medium text-gray-800">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L &middot; Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium text-gray-800">MRP: $99</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start border-b border-gray-200 pb-6">
              <div className="w-24 h-24 flex-shrink-0">
                <Image
                  src="/images/stool2.png"
                  alt="Library Stool Chair"
                  width={96}
                  height={96}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1 px-4">
                <h3 className="text-lg font-medium text-gray-800">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L &middot; Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium text-gray-800">MRP: $99</p>
              </div>
            </div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <p>Subtotal</p>
              <p>$198.00</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-800">
              <p>Total</p>
              <p>$198.00</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-teal-600 text-white text-center py-3 rounded-lg font-medium hover:bg-teal-700">
            Member Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;
