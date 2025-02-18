import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { JobFormBasicInfo } from "./JobForms/JobFormBasicInfo"
import { JobFormSalaryLocation } from "./JobForms/JobFormSalaryLocation"
import { JobFormDescription } from "./JobForms/JobFormDescription"
import { useFormLogic } from "../hooks/useFormLogic"
import { jobFormValidationSchema } from "../utils/validationSchemas"

const initialFormState = {
  positionName: "",
  vacancyName: "",
  department: "",
  openingDate: "",
  closingDate: "",
  gender: "",
  education: "",
  salaryFrom: "",
  salaryTo: "",
  salaryBeforeTax: true,
  region: "",
  address: "",
  metroStation: "",
  workExperience: "",
  schedule: "",
  employmentType: "full",
  responsibilities: "",
  requirements: "",
  benefits: "",
  weOffer: "",
}

function JobForm({ initialValues, onSubmit, onCancel, isEdit }) {
  const formik = useFormLogic(initialValues || initialFormState, jobFormValidationSchema, onSubmit)

  const formTitle = useMemo(() => (isEdit ? "Форма редактирования" : "Форма размещения"), [isEdit])
  const submitButtonText = useMemo(() => (isEdit ? "Сохранить" : "Отправить"), [isEdit])
  const cancelButtonText = useMemo(() => (isEdit ? "Отменить" : "Сбросить"), [isEdit])

  return (
    <div className="form-container">
      <h1 className="form-title">
        {formTitle} <a href="#">заявки</a>
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <JobFormBasicInfo formik={formik} />
        <JobFormSalaryLocation formik={formik} />
        <JobFormDescription formik={formik} />

        <div className="form-footer">
          <button type="submit" className="btn btn-primary">
            {submitButtonText}
          </button>
          <button type="button" className="btn btn-outline" onClick={onCancel}>
            {cancelButtonText}
          </button>
        </div>
      </form>
    </div>
  )
}

JobForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
}

export default React.memo(JobForm)

