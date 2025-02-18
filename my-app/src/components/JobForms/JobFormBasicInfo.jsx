import { FormInput } from "../../forms/FormInput"
import { FormDateInput } from "../../forms/FormDateInput"
import { FormRadioGroup } from "../../forms/FormRadioGroup"
import { FormSelect } from "../../forms/FormSelect"

export function JobFormBasicInfo({ formik }) {
  const genderOptions = [
    { value: "male", label: "Мужской" },
    { value: "female", label: "Женский" },
  ]

  return (
    <div className="form-card">
      <div className="form-grid">
        <FormInput
          label="Наименование должности"
          required
          {...formik.getFieldProps("positionName")}
          error={formik.touched.positionName && formik.errors.positionName}
        />
        <FormInput
          label="Наименование вакансии"
          required
          {...formik.getFieldProps("vacancyName")}
          error={formik.touched.vacancyName && formik.errors.vacancyName}
        />
        <FormInput
          label="Отдел"
          required
          {...formik.getFieldProps("department")}
          error={formik.touched.department && formik.errors.department}
        />
      </div>

      <div className="form-grid">
        <FormDateInput
          label="Дата открытия"
          required
          {...formik.getFieldProps("openingDate")}
          error={formik.touched.openingDate && formik.errors.openingDate}
        />
        <FormDateInput
          label="Плановая дата закрытия"
          required
          {...formik.getFieldProps("closingDate")}
          error={formik.touched.closingDate && formik.errors.closingDate}
        />
      </div>

      <div className="form-grid-2">
        <FormRadioGroup
          label="Пол"
          required
          inline={false}
          options={[
            { value: "male", label: "Мужской" },
            { value: "female", label: "Женский" },
          ]}
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gender && formik.errors.gender}
        />
        <FormSelect
          label="Образование"
          required
          {...formik.getFieldProps("education")}
          error={formik.touched.education && formik.errors.education}
        >
          <option value="Высшее">Высшее</option>
          <option value="Среднее">Среднее</option>
          <option value="Среднее специальное">Среднее специальное</option>
        </FormSelect>
      </div>
    </div>
  )
}

