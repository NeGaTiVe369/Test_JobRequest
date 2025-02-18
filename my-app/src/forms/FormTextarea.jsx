export function FormTextarea({ label, error, ...props }) {
    return (
      <div className="form-textarea-group">
        <label className="form-label">{label}</label>
        <textarea className="form-textarea" {...props} />
        {error && <div className="form-error">{error}</div>}
      </div>
    )
  }
  
  