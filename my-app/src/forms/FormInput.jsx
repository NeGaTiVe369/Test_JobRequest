export function FormInput({ label, required, error, ...props }) {
    return (
      <div className="form-group">
        {label && <label className={`form-label ${required ? "required" : ""}`}>{label}</label>}
        <input className="form-input" {...props} />
        {error && <div className="form-error">{error}</div>}
      </div>
    )
  }
  
  