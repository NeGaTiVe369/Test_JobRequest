import { useFormik } from "formik"

export const useFormLogic = (initialValues, validationSchema, onSubmit) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return formik
}

