//--==== FOR CATEGORIES ====--//
export const categorySchema = {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        }
    ],
};

//--==== FOR PRODUCTS ====--//
export const productSchema = {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
};

//--==== FOR ORDERS ====--//
export const orderSchema = {
    name: "orders",
    title: "Orders",
    type: "document",
    fields: [
      {
        name: "orderNumber",
        title: "Order Number",
        type: "string",
      },
      {
        name: "customer",
        title: "Customer",
        type: "reference",
        to: [{ type: "customers" }],
      },
      {
        name: "products",
        title: "Ordered Products",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "product",
                title: "Product",
                type: "reference",
                to: [{ type: "products" }],
              },
              {
                name: "quantity",
                title: "Quantity",
                type: "number",
              },
              {
                name: "price",
                title: "Price",
                type: "number",
              },
            ],
          },
        ],
      },
      {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
      },
      {
        name: "orderDate",
        title: "Order Date",
        type: "datetime",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Processing", value: "processing" },
            { title: "Shipped", value: "shipped" },
            { title: "Delivered", value: "delivered" },
            { title: "Cancelled", value: "cancelled" },
          ],
        },
      },
      {
        name: "paymentMethod",
        title: "Payment Method",
        type: "string",
        options: {
          list: [
            { title: "Credit Card", value: "credit_card" },
            { title: "PayPal", value: "paypal" },
            { title: "Cash on Delivery", value: "cod" },
          ],
        },
      },
      {
        name: "shippingAddress",
        title: "Shipping Address",
        type: "text",
      },
      {
        name: "trackingNumber",
        title: "Tracking Number",
        type: "string",
      },
      {
        name: "notes",
        title: "Additional Notes",
        type: "text",
      },
],
};
  
