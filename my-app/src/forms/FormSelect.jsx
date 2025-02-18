export function FormSelect({ label, required, error, children, ...props }) {
    return (
      <div className="form-group">
        <label className={`form-label ${required ? "required" : ""}`}>{label}</label>
        <select className="form-select" {...props}>
          <option value="">Выберите образование</option>
          {children}
        </select>
        {error && <div className="form-error">{error}</div>}
      </div>
    )
  }
  
  