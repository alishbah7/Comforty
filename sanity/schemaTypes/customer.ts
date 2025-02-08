import { defineType } from "sanity";

export const customerSchema = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    {
      name: "customerId",
      title: "Customer ID",
      type: "string",
      readOnly: true,
    },
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "email",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customerPhone",
      title: "Customer Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customerAddress",
      title:"customerAddress",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customerCity",
      title:"customerCity",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "customerPostalCode",
      title:"customerPostalCode",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});
