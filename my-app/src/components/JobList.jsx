import React from "react"
import PropTypes from "prop-types"

function JobList({ jobs, onEdit }) {
  return (
    <div className="container">
      <h1 className="page-title">Заявки на размещение вакансий</h1>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <div className="job-date">Дата публикации: {job.publishedDate}</div>
          <button className="edit-button" onClick={() => onEdit(job)} aria-label="Редактировать">
            <img src={`${process.env.PUBLIC_URL}/Edit.svg`} alt="Edit" />
          </button>

          <h2 className="job-title">{job.positionName}</h2>

          <div className="job-details">
            <div className="job-location">
              <img src={`${process.env.PUBLIC_URL}/MapPin.svg`} alt="Location" style={{ color: "#524af5", fontSize: "1.125rem" }} />
              {job.address}
            </div>
            <div className="job-salary">
              <span>от {job.salaryFrom.toLocaleString()}</span> на руки
            </div>
            <div className="job-exp">
              Требуемый опыт: <span>{job.workExperience}</span>
            </div>
            <div className="job-metro">
              <img className="metro-icon" src={`${process.env.PUBLIC_URL}/Metro.svg`} alt="Metro" />
              {job.metroStation}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      positionName: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      salaryFrom: PropTypes.number.isRequired,
      workExperience: PropTypes.string.isRequired,
      metroStation: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default React.memo(JobList)

