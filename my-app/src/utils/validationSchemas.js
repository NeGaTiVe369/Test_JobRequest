import * as Yup from "yup"

export const jobFormValidationSchema = Yup.object({
  positionName: Yup.string().required("Обязательное поле"),
  vacancyName: Yup.string().required("Обязательное поле"),
  department: Yup.string().required("Обязательное поле"),
  openingDate: Yup.date().required("Обязательное поле"),
  closingDate: Yup.date().required("Обязательное поле"),
  gender: Yup.string().required("Выберите пол"),
  education: Yup.string().required("Выберите образование"),
  salaryFrom: Yup.number().required("Укажите минимальную зарплату"),
  salaryTo: Yup.number().required("Укажите максимальную зарплату"),
  region: Yup.string().required("Укажите регион"),
  address: Yup.string().required("Укажите адрес"),
  schedule: Yup.string().required("Выберите график работы"),
  employmentType: Yup.string().required("Выберите тип занятости"),
})

