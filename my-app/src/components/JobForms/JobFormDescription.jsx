import { FormTextarea } from "../../forms/FormTextarea"

export function JobFormDescription({ formik }) {
  return (
    <div className="form-card">
        <FormTextarea
          label="Функциональные обязанности"
          placeholder="Какую работу будет выполнять сотрудник"
          {...formik.getFieldProps("responsibilities")}
        />
        <FormTextarea
          label="Пожелания к кандидату"
          placeholder="Ключевые навыки, достижения"
          {...formik.getFieldProps("requirements")}
        />
        <FormTextarea
          label="Преимуществом будет"
          placeholder="Дополнительные специальные навыки"
          {...formik.getFieldProps("benefits")}
        />
        <FormTextarea
          label="Мы предлагаем"
          placeholder="Преимущества компании"
          {...formik.getFieldProps("weOffer")}
        />
    </div>
  )
}

