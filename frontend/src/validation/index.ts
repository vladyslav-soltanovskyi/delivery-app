import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const orderSchema = yup.object({
  address: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
  name: yup.string().required(),
}).required();

export type OrderSchemaData = yup.InferType<typeof orderSchema>;