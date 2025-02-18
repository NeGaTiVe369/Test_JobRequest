import { useState, useCallback } from "react"
import JobForm from "./components/JobForm"
import JobList from "./components/JobList"
import mockData from "./mockData.json"
import "./App.css"

function App() {
  const [jobs, setJobs] = useState(mockData.jobs)
  const [view, setView] = useState("list")
  const [editingJob, setEditingJob] = useState(null)

  const handleCreateJob = useCallback((newJob) => {
    const jobWithId = {
      ...newJob,
      id: Date.now().toString(),
      publishedDate: new Date().toISOString(),
    }
    setJobs((prevJobs) => [jobWithId, ...prevJobs])
    setView("list")
  }, [])

  const handleEditJob = useCallback((job) => {
    setEditingJob(job)
    setView("edit")
  }, [])

  const handleUpdateJob = useCallback((updatedJob) => {
    setJobs((prevJobs) => prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)))
    setView("list")
    setEditingJob(null)
  }, [])

  const handleCancel = useCallback(() => {
    setView("list")
    setEditingJob(null)
  }, [])

  return (
    <div>
      <header className="header">
        <div className="logo"></div>
        <nav className="nav-links">
          <button className={`nav-link ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>
            Все заявки
          </button>
          <button
            className={`nav-link ${view === "create" ? "active" : ""}`}
            onClick={() => {
              setEditingJob(null)
              setView("create")
            }}
          >
            Создание заявки
          </button>
        </nav>
      </header>

      <main>
        {view === "list" && <JobList jobs={jobs} onEdit={handleEditJob} />}

        {view === "create" && <JobForm onSubmit={handleCreateJob} onCancel={handleCancel} />}

        {view === "edit" && editingJob && (
          <JobForm initialValues={editingJob} onSubmit={handleUpdateJob} onCancel={handleCancel} isEdit />
        )}
      </main>
    </div>
  )
}

export default App

