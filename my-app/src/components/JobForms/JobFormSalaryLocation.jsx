import { FormInput } from "../../forms/FormInput"
import { FormRadioGroup } from "../../forms/FormRadioGroup"
import { FormSelect } from "../../forms/FormSelect"

export function JobFormSalaryLocation({ formik }) {
  const salaryTypeOptions = [
    { value: "false", label: "На руки" },
    { value: "false", label: "До вычета налогов" },
  ]

  const scheduleOptions = [
    { value: "Полный день", label: "Полный день" },
    { value: "Сменный график", label: "Сменный график" },
    { value: "Гибкий график", label: "Гибкий график" },
  ]

  const employmentTypeOptions = [
    { value: "full", label: "Полная занятость" },
    { value: "part", label: "Частичная занятость" },
    { value: "internship", label: "Стажировка" },
  ]

  return (
    <div className="form-card">
      <div className="form-section">
        <div className="form-section-title">Зарплата</div>
        <FormRadioGroup
          options={salaryTypeOptions}
          name="salaryBeforeTax"
          checked={formik.values.salaryBeforeTax}
          onChange={(e) => formik.setFieldValue("salaryBeforeTax", e.target.value === "true")}
        />
        <div className="salary-grid">
          <div className="salary-inputs">
            <span>от</span>
            <FormInput
              placeholder=""
              type="number"
              {...formik.getFieldProps("salaryFrom")}
              error={formik.touched.salaryFrom && formik.errors.salaryFrom}
            />
            <span>до</span>
            <FormInput
              placeholder=""
              type="number"
              {...formik.getFieldProps("salaryTo")}
              error={formik.touched.salaryTo && formik.errors.salaryTo}
            />
          </div>
        </div>
      </div>

      <div className="form-grid-3">
        <FormInput
          label="Регион"
          required
          {...formik.getFieldProps("region")}
          error={formik.touched.region && formik.errors.region}
        />
        <FormInput
          label="Адрес"
          required
          {...formik.getFieldProps("address")}
          error={formik.touched.address && formik.errors.address}
        />
        <FormInput label="Станция метро, МЦД" {...formik.getFieldProps("metroStation")} />
      </div>

      <div className="form-grid">
        <FormInput label="Опыт работы" {...formik.getFieldProps("workExperience")} />
        <FormSelect
          label="График работы"
          required
          {...formik.getFieldProps("schedule")}
          error={formik.touched.schedule && formik.errors.schedule}
        >
          {scheduleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </FormSelect>
        <FormRadioGroup
          label="Тип занятости"
          required
          options={employmentTypeOptions}
          inline={false}
          {...formik.getFieldProps("employmentType")}
          error={formik.touched.employmentType && formik.errors.employmentType}
        />
      </div>
    </div>
  )
}

