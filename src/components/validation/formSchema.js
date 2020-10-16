import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('name is required')
    .min(3, "Name must have 3 characters"),
    size: yup
    .string()
    .required("one ise required")
    .oneOf(["Small", "Medium", "Large", "X-Large"]),
    pepporoni: yup.boolean(),
    ham: yup.boolean(),
    pineaple: yup.boolean(),
    bacon: yup.boolean(),

})