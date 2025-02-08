import { defineType } from "sanity";

export const orderSchema = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "orderId",
      title: "Order ID",
      type: "string",
      readOnly: true,
    },
    {
      name: 'productsId',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productId', type: 'string' },
            { name: 'quantity', type: 'number' },
          ],
        },
      ],
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: ["Cash", "Card", "Online"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "amount",
      title: "Order Amount",
      type: "number",
      validation: (Rule) => Rule.required().min(0).precision(2),
    },
  ],
});
